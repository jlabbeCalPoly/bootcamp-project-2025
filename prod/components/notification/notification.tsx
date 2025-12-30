import { useState, useRef, useEffect } from "react";
import Style from "./notification.module.css";

interface Props {
  props: NotificationProps
}

export interface NotificationProps {
  status: number | undefined;
  message: string | undefined;
}

export default function Notification({ props }: Props) {
  const [notificationState, setNotificationState] = useState("hidden");
  const timeoutRef = useRef<
    string | number | NodeJS.Timeout | undefined
  >(undefined);

  useEffect(() => {
    if (props.message === undefined || props.status === undefined) {
      return;
    }

    setNotificationState("hidden");
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    const timeout = setTimeout(() => {
      setNotificationState("out");
    }, 5000);
    timeoutRef.current = timeout;

    setNotificationState("in");
  }, [props]);

  return (
    <p className={`${Style.notification} ${Style[notificationState]} ${props.status === 200 ? Style.success : Style.failure }`}>
      {props.message}
    </p>
  );
}
