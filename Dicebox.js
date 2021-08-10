import { render } from "@testing-library/react";
import React from "react"
import './index.css';

class Dicebox extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="dicebox">
                <ul className="die">
                    <li className="dice1"><span className="dot1"></span></li>
                    <li className="dice2"><span className="dot2"></span></li>
                    <li className="dice3"><span className="dot3"></span></li>
                    <li className="dice4"><span className="dot4"></span></li>
                    <li className="dice5"><span className="dot5"></span></li>
                </ul>
            </div>
        );
    }

}



export default Dicebox;
