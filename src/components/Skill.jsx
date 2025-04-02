import React from "react"
function Skill({name,link}){
    return(
        <div className="skill">
            <img src={link}></img>
            <p>{name}</p>

        </div>

    )
    
}
export default Skill;