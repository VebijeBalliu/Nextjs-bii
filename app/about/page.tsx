import React from "react";
import aboutData from "../../data/aboutData.json"; 
import "./ab.css";


interface TeamMember {
    name: string;
    role: string;
}

interface AboutData {
    description: string;
    mission: string;
    team: TeamMember[];
}


const aboutInfo: AboutData = aboutData as AboutData;

const About: React.FC = () => {
    return (
        <section className="container py-5">
            <h1 className="text-center">About Us</h1>
            <p className="text-center">{aboutInfo.description}</p>
            <h2 className="mt-4">Our Mission</h2>
            <p>{aboutInfo.mission}</p>
            <h2 className="mt-4">Meet the Team</h2>
            <ul className="list-unstyled">
                {aboutInfo.team.map((member: TeamMember, index: number) => (
                    <li key={index}>
                        <strong>{member.name}</strong> - {member.role}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default About;
