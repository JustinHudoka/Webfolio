import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="myPDF">
                <iframe src="JustinHudokaResume2023.pdf" height="100%" width="55%"></iframe>
            </div>
        </section>
    )
}

export default Resume;