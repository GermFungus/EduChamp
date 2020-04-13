import React from "react";
import './QuizCard.css';
export default class QuizCardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="cardDiv">
              <div className = "QuizName">
                  <h4>Sample 1</h4>
              </div>
              <div className="content"> 
                  <p>Subject : </p>
                  <p>Total Question :</p>
                  <p>Total Marks :</p>
                  <p>Status :</p>
              </div>
              <div className="QuizCardButton">
                Start Now 
              </div>
            </div>
        );
    }
}