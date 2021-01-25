import { React } from 'react';
import { useState } from 'react';

let statusStyle = {
            backgroundColor: "gold",
            color: "white",
            textShadow: "2px 2px 2px black",
            fontSize: "14px",
            padding: "5px 30px",
            borderRadius: "5px",
            margin: "10px 5px",
            cursor: "pointer",
            boxShadow: "-0pt 1.5pt 1pt 1pt black",
        }


const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
    textShadow: "2px 2px 2px black",
    fontSize: "14px",
    padding: "5px 30px",
    borderRadius: "5px",
    margin: "10px 5px",
    cursor: "pointer",
    boxShadow: "-0pt 1.5pt 1pt 1pt black",
}



function TodoCard(props) {

    const { title, clickToRemove, index } = props
    const [urgency, setUrgency] = useState("Normal")

    const statusChange = (e) => {
        console.log("clickity", urgency)
        if (urgency === "Normal") {
            setUrgency("High")
            statusStyle = {
                backgroundColor: "red",
                color: "white",
                textShadow: "2px 2px 2px black",
                fontSize: "14px",
                padding: "5px 30px",
                borderRadius: "5px",
                margin: "10px 5px",
                cursor: "pointer",
                boxShadow: "-0pt 1.5pt 1pt 1pt black",
            }
        } else if (urgency === "High") {
            setUrgency("Low")
            statusStyle = {
                backgroundColor: "green",
                color: "white",
                textShadow: "2px 2px 2px black",
                fontSize: "14px",
                padding: "5px 30px",
                borderRadius: "5px",
                margin: "10px 5px",
                cursor: "pointer",
                boxShadow: "-0pt 1.5pt 1pt 1pt black",
            }
        } else if (urgency === "Low") {
            setUrgency("Normal")
            statusStyle = {
                backgroundColor: "gold",
                color: "white",
                textShadow: "2px 2px 2px black",
                fontSize: "14px",
                padding: "5px 30px",
                borderRadius: "5px",
                margin: "10px 5px",
                cursor: "pointer",
                boxShadow: "-0pt 1.5pt 1pt 1pt black",
            }
        }
    }




    return (
        <li style={{ color: "#61DAFB"}}>{title}
            <button style={ buttonStyle } onClick={()=> {clickToRemove(index)}}>Remove</button>
            <button style= { statusStyle } onClick={statusChange}>{urgency}</button>
        </li>
    )
}

export default TodoCard;