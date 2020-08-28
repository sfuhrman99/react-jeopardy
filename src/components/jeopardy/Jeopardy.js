
import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display'

class Jeopardy extends Component {
 
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {category: {}},
      score: 0,
      formData: {
        guess:''
      }
        
      
    }
    
  }
 
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0],

      })
    })
  }
 
  componentDidMount() {
    this.getNewQuestion();
  }

  checkAnswer = (event) => {
    const submittedAnswer = this.state.formData.guess
    const correctAnswer = this.state.data.answer
    

    
    if(submittedAnswer !== correctAnswer) {
      this.wrongAnswer()
      
      
    }
    
    else{
      this.rightAnswer()
    }
    
    this.getNewQuestion()
    
  }

wrongAnswer() {
  const questionValue = Number(this.state.data.value)
  const usersScore = Number(this.state.score)

  this.setState((state, props) => ({
    score: usersScore - questionValue
  }))
}

rightAnswer() {
  const questionValue = Number(this.state.data.value)
  const usersScore = Number(this.state.score)

  this.setState((state, props) => ({
    score: usersScore + questionValue
  }))
}

handleChange = (event) => {
  const formData = {...this.state.formData}
  formData[event.target.name] = event.target.value

  this.setState({ formData })
}

resetForm = (event) => {
  this.setState({
    formData: {
      guess: ''
    }
  })
}
 
  render() {
    return (
      <Display 
      question={this.state.data.question}
      category={this.state.data.category.title}
      pointValue={this.state.data.value}
      score={this.state.score}
      answer={this.state.data.answer}
      
      
      value={this.state.formData.guess}
      handleChange={this.handleChange}
      checkAnswer={this.checkAnswer}

     
      />

    );
  }
}
export default Jeopardy;