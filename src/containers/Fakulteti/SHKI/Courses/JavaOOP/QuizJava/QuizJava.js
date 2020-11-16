import React, {Component} from 'react';
import  './QuizJava.css';
import Questions from './questions/Questions';
import Answer from './answers/Answers';


class QuizForm extends Component{
state={
        questions:{
            1: "What is a Class?",
            2: "What is an Object?",
            3: "What does Overriding mean?",
            4: "What does Overloading mean?",
            5: "What is an Inheritance?",
            6: "What is an Interface?",
            7: "What is difference between Inheritance and Interface?",
            8: "When we use equal method?",
            9: "What is a String?",
            10: "What is an abstract class?",


        },
        answers:{
              1:{
                  1: " is like an object constructor, or a blueprint for creating objects.",
                  2: "an object-oriented programming language",
                  3: "It is open-source and free",
                  4: "are containers for storing data values",
              },
              2:{
                1: " is like an object constructor, or a blueprint for creating objects.",
                2: "is the instance of a class",
                3: "It is open-source and free",
                4: "are containers for storing data values",
              },
              3:{
                1: " is like an object constructor, or a blueprint for creating objects.",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "It is open-source and free",
                4: "are containers for storing data values",
              },
              4:{
                1: " is like an object constructor, or a blueprint for creating objects.",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "It is open-source and free",
                4: "is a feature that allows a class to have more than one method having the same name",
              },
              5:{
                1: "can be defined as the process where one class acquires the properties (methods and fields) of another",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "It is open-source and free",
                4: "is a feature that allows a class to have more than one method having the same name",
              },
              6:{
                1: "can be defined as the process where one class acquires the properties (methods and fields) of another",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "is a completely abstract class that is used to group related methods with empty bodies",
                4: "is a feature that allows a class to have more than one method having the same name",
              },
              7:{
                1: "can be defined as the process where one class acquires the properties (methods and fields) of another",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "in the inheritance we can extends an super class, in interface a class implements an interface but an interface extend an other interface",
                4: "is a feature that allows a class to have more than one method having the same name",
              },
              8:{
                1: "can be defined as the process where one class acquires the properties (methods and fields) of another",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "in the inheritance we can extends an super class, in interface a class implements an interface but an interface extend an other interface",
                4: "to compare the object if they are equal or not",
              },
              9: {
                1: "is basically an object that represents sequence of char values and is immutable",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "in the inheritance we can extends an super class, in interface a class implements an interface but an interface extend an other interface",
                4: "to compare the object if they are equal or not",
              },
              10:{
                1: "is basically an object that represents sequence of char values and is immutable",
                2: "when a subclass extends another class, it inherits the behavior of the superclass",
                3: "is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class)",
                4: "to compare the object if they are equal or not",
              }
        },
        correctAnswers:{
            1: "1",
            2: "2",
            3: "2",
            4: "4",
            5: "1",
            6: "3",
            7: "3",
            8: "4",
            9: "1",
            10: "3"
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer =>{
        const{correctAnswers, step, score}=this.state;

        if(answer === correctAnswers[step]){
            this.setState({
                score: score+1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            })
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }
    }

    nextStep = step =>{
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }
   render(){
       let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
       return(
           <div className="QuizJava">
            {step <= Object.keys(questions).length ?
            (<div>
               <Questions 
                    questions={questions[step]}
                />
               <Answer answer={answers[step]}
                      step={step}
                      checkAnswer={this.checkAnswer}
                      correctAnswer={correctAnswer}
                      clickedAnswer={clickedAnswer}
               />

               <button  
                      className="NextStep"
                      disabled={
                          clickedAnswer && Object.keys(questions).length >= step ? false : true                      
                          }
                          onClick={() => this.nextStep(step)}
                          >
                              NEXT
                          </button>
                          </div>
                          ) : (<div className="finalPage">
                              <h2>You have completed the quiz</h2>
                              <p> Your score is: {score} of {Object.keys(questions).length}</p>
                              <p>Thank you!</p>
                              </div>
            )


            }
           </div>
       )
   }
}

export default QuizForm;

//https://www.youtube.com/watch?v=6HZL3f_fJRE&t=2s&ab_channel=VicodeMedia