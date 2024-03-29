import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {

    const navigate = useNavigate();

    const toContactPage = () => {
        navigate('/contact')
    }

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I am Justin Hudoka
                    <br />
                    Software Engineer
                </h1>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateY(550px)'
                    }}

                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    <div className="home_contact-me">
                        <button onClick={toContactPage}>Hire Me</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}

export default Home;