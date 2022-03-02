import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";



function About() {
    return (
        
        <section className="my-5">
        <a data-testid="about" href="#about"> <h1 id="about">Who am I?</h1></a>
           
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
}

export default About;