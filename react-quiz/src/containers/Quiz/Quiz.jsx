import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.css"

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета елка?',
        rightAnswerId: 3,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Коричневый', id: 2},
          {text: 'Зеленый', id: 3},
          {text: 'Красный', id: 4},
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer ID:', answerId)
  }

  render(){
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
            <ActiveQuiz 
              answers={this.state.quiz[0].answers}
              question={this.state.quiz[0].question}
              onAnswerClick = {this.onAnswerClickHandler}
            />
        </div>
      </div>
    )
  }
}

export default Quiz