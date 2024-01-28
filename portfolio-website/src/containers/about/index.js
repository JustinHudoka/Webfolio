import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { FaDatabase, FaDev, FaGithubSquare, FaPython } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name",
        value: "Justin Hudoka"
    },
    {
        label: "Age",
        value: "27"
    },
    {
        label: "Location",
        value: "United States"
    }
]

const jobSummary = 'Software Engineer at TBL inc since 06/06/2022. Working full stack to modernize and expand their logistics web application, used by hundreds of major carriers and clients throughout the United States and Canada.'
const schoolSummary = 'Started programming in highschool through classes offered there. Learned the basics of C++. Went to Lehigh Carbon Community College for game development. developed games in C# using the unity engine. Continued my education with Kutztown University where I recieved my B.S. in Computer Science. Expanded my library of programming languages to include Java, C, Python, and SQL. Simultaneously learning about different data structures and artificial intelligence'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-1000px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Software Engineer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(-1000px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="schoolInformationHeaderText">School Information</h3>
                        <p>{schoolSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}: </span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about_content_servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <div className="about_content_servicesWrapper_innercontent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaPython size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaGithubSquare size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}

export default About;