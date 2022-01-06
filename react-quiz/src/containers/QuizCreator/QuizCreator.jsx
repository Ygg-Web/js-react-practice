import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'

class QuizCreator extends Component {

  onSubmitHandler=(e)=> {
      e.preventDefault()
  }

  addQuestionHandler=()=> {

  }

  createQuizHandler=()=> {

  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.onSubmitHandler}>
              <input type='text'/>
              <hr/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>

              <select></select>

              <Button 
                type='primary'
                onClick={this.addQuestionHandler}
              >
                Добавить вопрос
              </Button>

              <Button 
                type='success'
                onClick={this.createQuizHandler}
              >
                Создать тест
              </Button>
          </form> 
        </div>
      </div>
    )
  }
}

export default QuizCreator