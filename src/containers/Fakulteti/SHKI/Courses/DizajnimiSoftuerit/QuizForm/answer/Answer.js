import React from 'react';
import './Answer.css';


const answer = (props) =>{
    let answer = Object.keys(props.answer).map((qAsnwer, i) => (
        <li className={
            props.correctAnswer === qAsnwer ?
            "correct" :
            props.clickedAnswer === qAsnwer ?
            "incorrect": "''"
        }
        onClick={()=>props.checkAnswer(qAsnwer)}
        key={qAsnwer}>
            {props.answer[qAsnwer]}</li>
    ))
    return(
        <div>
          <ul disabled= {props.clickedAnswer ? true : false}className="Answer">
            {answer}
          </ul>
          <div> 
          {
              props.correctAnswer ? 'Correct Answer' : props.clickedAnswer ? 'Incorrect Answer' : ''
          }
          </div>
        </div>   
    )
}

export default answer;