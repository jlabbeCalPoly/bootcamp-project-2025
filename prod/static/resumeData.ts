export interface ResumeEntry {
    title: string,
    date: string,
    description: string,
    location: string,
    bullets: string[]
}

export interface ResumeCategory {
    title: string,
    entries: ResumeEntry[]
}

const resumeData: ResumeCategory[] = [
    {
        title: "Education",
        entries: [
            {
                title: "California Polytechnic State University, San Luis Obispo",
                date: "Aug. 2023 - Present",
                description: "Bachelor of Science Degree in Computer Science",
                location: "Expected May 2027",
                bullets: [
                    "<b>GPA:</b> 3.68 / 4.0, <i>President's List 2024 - 2025</i>",
                    "<b>Coursework:</b> Introduction to Software Engineering I - II, Mobile App Development, Introduction to Database Systems, Data Structures, Design and Analysis of Algorithms, Object Oriented Programming, Systems Programming"
                ]
            }
        ]
    },
    {
        title: "Experience",
        entries: [
            {
                title: "Mobile App Developer Intern",
                date: "Jan. 2025 - Aug. 2025",
                description: "Frost Undergraduate Summer Research",
                location: "San Luis Obispo, CA",
                bullets: [
                    "<b>Redesigned and developed an optimized method</b> to acquire, process and display data in a physics simulation app, leveraging <b>multiple threads</b> for improved performance",
                    "Reduced the delay between audio streaming and render updates by <b>~50%</b>, compared to the app's previous version",
                    "Built a virtual oscilloscope and audio spectrum analyzer in <b>Kotlin</b> on <b>Android Studio</b>, implementing a version of the Cooley-Tukey FFT algorithm to decompose and display the frequency components of incoming audio signals"
                ]
            }
        ]
    },
    {
        title: "Projects",
        entries: [
            {
                title: "Food Expiration Tracker",
                date: "Jan. 2025 - June 2025",
                description: "Web Application",
                location: "San Luis Obispo, CA",
                bullets: [
                    "Developed a <b>full-stack web application</b> in <b>JavaScript</b> to track the expiration date of foods in a user's fridge",
                    "Built and styled the app's frontend architecture by creating reusable <b>React</b> components and applying custom <b>CSS</b>",
                    "Integrated the <b>Unsplash API</b> to allow users to select representative images for their food items",
                    "Prompted the <b>Groq API</b> to generate potential recipes using AI, prioritizing foods that expire the earliest",
                    "Leveraged industry-standard project management solutions such as <b>Git</b> and followed an <b>Agile</b> workflow with teammates"
                ]
            },
            {
                title: '"Scavenge Ore!"',
                date: "Apr. 2025 - Present",
                description: "Video Game",
                location: "Sunnyvale, CA",
                bullets: [
                    "Designed and developed the <b>entire software architecture</b> behind the game “Scavenge-Ore” on Roblox, achieving <b>top 7%</b> ranking in average player playtime <b>(35+ minutes)</b> across all games, demonstrating high user engagement",
                    "Architected <b>50+ modular, reusable frontend components</b> that improved user engagement and retention",
                    "<b>Strengthened backend security</b> by implementing a robust exploit detection system to mitigate the vulnerabilities posed by client-server data exchange",
                    "Applied software architecture principles (modularity, data integrity, and concurrency) to enhance <b>maintainability</b>"
                ]
            },
            {
                title: "julianlabbe.me",
                date: "Feb. 2025 - Mar. 2025",
                description: "Personal Website",
                location: "San Luis Obispo, CA",
                bullets: [
                    "Implemented <b>RESTful API endpoints</b> in an <b>Express backend</b> to handle data flow between the frontend and backend",
                    "Configured a <b>MongoDB database</b> to store form submissions, maintaining data integrity through schema validation",
                    "Deployed the <b>full-stack web application</b> using <b>Vercel</b> and <b>Github Pages</b>, integrating a <b>CI/CD</b> workflow"
                ]
            },
            {
                title: '"Impossible Word Unscrambler"',
                date: "June 2024 - Oct. 2024",
                description: "Video Game",
                location: "Sunnyvale, CA",
                bullets: [
                    "Engineered the core logic behind the <b>frontend</b> and <b>backend</b> systems for the game “Impossible Word Unscrambler” on Roblox, achieving <b>top 5%</b> ranking in user monetization rate across all games and <b>2,600,000+ plays</b>"
                ]
            }
        ]
    }
]

export default resumeData;