import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(useGSAP);
import Style from "./cardStack.module.css";

// The max amount of cards that are being tracked in the card stack (-1 to account for "invisible" card)
const STACK_SIZE = 5;
// The pixel offset between each consecutive card in the card stack
const POSITION_OFFSET = 12;
// The opacity offset between each consecutive card in the card stack
const OPACITY_OFFSET = 0.2;

interface CardStackProps {
  cards: React.ReactNode[]
}

interface IDCard {
  id: number,
  card: React.ReactNode
}

export default function CardStack({ cards } : CardStackProps) {
  // Wrap each card component with a unique id:
  const idCards: IDCard[] = cards.map((card, idx) => ({
    id: idx,
    card: card
  }))

  // State
  const [index, setIndex] = useState(0);

  // Refs
  const isSwipableRef = useRef(true);
  const draggableRef = useRef<Draggable | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*
  * Orders the cards based on the the current positon of the card deck
  * Wrap around to the beginning of the array in the event the resulting array is under STACK_SIZE
  */
  const partitioned = idCards.slice(index).concat(idCards.slice(0, index))

  // Sets the resulting stack ordering after a swipe animation, resetting the swipable reference as a well
  function updateCardStack() {
    for (let i = 1; i < partitioned.length; i++) {
      const card = cardRefs.current[i];
      if (!card) return;

      const pos = i - 1;
      const yOffset = pos * POSITION_OFFSET;
      const opacity = Math.max(1 - (pos * OPACITY_OFFSET), 0);
      if (opacity === 0) return;

      gsap.to(card, {
        y: yOffset,
        opacity: Math.max(opacity, 0),
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }

  useGSAP(() => {
    const topCard = cardRefs.current[0];
    if (!topCard) return;

    if (draggableRef.current) {
      draggableRef.current.kill();
    }

    function handlePress(this: Draggable.Vars) {
      if (!isSwipableRef.current) {
        // prevent dragging the top card while animating
        this.endDrag();
      }
    }
    
    draggableRef.current = Draggable.create(topCard, {
        type: "x",
        edgeResistance: 0.65,
        onPress: handlePress,
        onRelease() {
          const threshold = 150;
          const { x } = this;

          if (x >= threshold) {
            isSwipableRef.current = false;

            const directionX = x > 0 ? 1 : -1;

            gsap.to(topCard, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
              onComplete: () => {
                // "Return" the card to the card stack by resetting its x position
                gsap.set(topCard, {x: 0})

                // If the opacity value happpens to be non-transparent, animate the card back in
                const idx = partitioned.length - 1;
                const opacity = Math.max(1 - (idx * OPACITY_OFFSET), 0);
                if (opacity > 0) {
                  gsap.to(topCard, {
                    opacity: opacity,
                    duration: 0.4,
                    ease: "power2.in",
                  })
                }

                updateCardStack();
                setIndex((prev) => (prev + 1) % idCards.length);
                isSwipableRef.current = true;
              },
          });
          } else {
            // Animate the card back to its original position
            gsap.to(topCard, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
          }
        },
      })[0];

      return () => {
        if (draggableRef.current) {
          draggableRef.current.kill();
        }
      };
  }, [index])
  
    return (
      <div className={Style.cardStackContainer}>
        {partitioned.map((card, idx) => (
          <div 
            className={Style.cardStackCard} 
            key={card.id} 
            ref={el => {
              cardRefs.current[idx] = el
            }}
            style={{
              zIndex: STACK_SIZE - idx,
              opacity: 1 - (Math.max(idx * OPACITY_OFFSET,0)),
              transform: `translateY(${idx * POSITION_OFFSET}px)`
            }}
          >
            {card.card}
          </div>
        ))}
      </div>
    );
}