import React from "react";
import '../styles/contact.css'

function Contact(){
    return(
        <div id="contact" className="contact">
            <h1>Get in touch</h1>
            <p>Feel free to reach out. I am always open to collaborate</p>
            <a href="mailto:saiputta157@gmail.com" className="email"><i class="fa-regular fa-envelope"></i></a>
            <a href="https://github.com/tharunputta157" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/tharunputta" target="_blank" className="linkedin"><i class="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Contact;