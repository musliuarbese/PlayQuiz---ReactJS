import React, {Component} from 'react';
import  './QuizForm.css';
import Questions from './questions/Questions';
import Answer from './answer/Answer';


class QuizForm extends Component{
state={
        questions:{
            1: "What is a Software Design?",
            2: "What is Abstraction?",
            3: "What is a Model?",
            4: "What is a static model",
            5: "What is a dynamic model",
            6: "What is a Software Product Design",
            7: "Is Software Design Important",
            8: "What is the matter of Software Design?",
            9: "What is analysis",
            10: "What is Resolution",


        },
        answers:{
              1:{
                  1: "is any executable entity, such as a program or its parts, such as subprograms",
                  2: "write software to create or modify programs for clients",
                  3: "are interested in products, not just software",
                  4: "is an entity comprised of one or more programs",
              },
              2:{
                  1: " is an entity  comprised of one or more programs",
                  2: "is suppressing or ignoring some properties of objects",
                  3: " Solve an abstract version of the problem, then add details",
                  4: " is an important problem-solving technique ",
              },
              3:{
                  1: "is suppressing or ignoring some properties of objects,",
                  2: "A model represents a target by having (a) model parts corresponding to target parts, (b) with relationships between model parts",
                  3: "represents aspects of programs that do not change during program execution",
                  4: "represents what happens during program execution",
              },
              4:{
                 1: "represents aspects of programs that do not change during program execution",
                 2: "represents what happens during program execution",
                 3: "is suppressing or ignoring some properties of objects",
                 4: "is an important problem-solving technique"
              },
              5:{
                  1: "is the activity of specifying software productfeatures, capabilities, "+
                     " and interfaces to satisfy client needs and desires",
                  2: "is an important problem-solving technique",
                  3: "is suppressing or ignoring some properties of objects",
                  4: "represents what happens during program execution"
              },
              6:{
                 1: "is the activity of specifying software productfeatures, capabilities, "+
                     " and interfaces to satisfy client needs and desires",
                 2: "is an important problem-solving technique",
                 3: "is suppressing or ignoring some properties of objects",
                 4: "represents what happens during program execution"
              },
              7:{
                  1: "no",
                  2: "yes is very important",
                  3: "is suppressing or ignoring some properties of objects",
                  4: "represents what happens during program execution",
              },
              8:{
                  1: "is best thought of as problem solving",
                  2:"represents what happens during program execution",
                  3: "is the activity of specifying software productfeatures",
                  4: "write software to create or modify programs for clients",
              },
              9: {
                1: "is breaking down a design problem to understand it",
                2: "write software to create or modify programs for clients",
                3: "are interested in products, not just software",
                4: "is an entity comprised of one or more programs",
              },
              10:{
                1: "is breaking down a design problem to understand it",
                2: "write software to create or modify programs for clients",
                3: "are interested in products, not just software",
                4: "is an entity comprised of one or more programs",
              }
        },
        correctAnswers:{
            1: "1",
            2: "4",
            3: "2",
            4: "1",
            5: "4",
            6: "1",
            7: "2",
            8: "1",
            9: "1",
            10: "1"
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
           <div className="QuizForm">
            {step <= Object.keys(questions).length ?
            (<div>
               <Questions 
                    question={questions[step]}
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