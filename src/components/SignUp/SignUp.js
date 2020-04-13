import React from "react";
import './SignUp.css';
import googleLogo from "../../images/Google-SVG-Logo-Using-GreenSock-Animation.gif"
import GoogleLogin from 'react-google-login';
export default class SignUpComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.responseGoogle=this.responseGoogle.bind(this);
        this.responseGooglei=this.responseGooglei.bind(this);
    }

    responseGoogle = (data) =>{
        this.props.changeState('dashBoard' , true);
    }
    responseGooglei = (data) =>{
        console.log(data);
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
                    
                    <GoogleLogin
                        clientId="840746059585-rkuo9f1n8nfjnb8ucmlsbnesm4da96ji.apps.googleusercontent.com"
                        render={renderProps => (
                        
                        <div  className="googleButton" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={googleLogo} className="googleButton"></img></div>
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGooglei}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        );
    }
}