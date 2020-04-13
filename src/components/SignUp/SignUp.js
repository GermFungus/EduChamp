import React from "react";
import './SignUp.css';
import googleLogo from "../../images/Google-SVG-Logo-Using-GreenSock-Animation.gif"
export default class SignUpComponent extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div className="outerBox">
                <form>
                    <label>Name</label>
                    <input type="name" required placeholder="Name"></input>
                    <label>E-Mail</label>
                    <input type="email" required placeholder="E-Mail"></input>
                    <label>Password</label>
                    <input type="password" required placeholder="Password"></input>
                    <button className="buttonSignUp"type="button" onClick={() => {}}>Sign Up</button>
                </form>
                <div className ="googleDiv">
                    <div>
                        <h3 className="googleHeading">--------- Or Sign Up With ---------</h3>
                    </div>
                    <div className="googleButton">
                        <img src={googleLogo} className="googleLogo"></img>
                    </div>
                </div>
            </div>
        );
    }
}