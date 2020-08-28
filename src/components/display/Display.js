import React from 'react';

function Display(props) {

    
    return (
        <div>
        <strong>Question: </strong>{props.question} <br/>
        <strong>Category: </strong>{props.category}<br/>
        <strong>Value: </strong>{props.pointValue}<br/>
        <strong>Score: </strong>{props.score}<br/>
        <strong>Answer: </strong>{props.answer}<br/>
        <h4> Submit Answer Below</h4>
        <form>
        <input 
          className='answer-box' 
          type='text' 
          name='guess' 
          value={props.guess}
          onChange={props.handleChange}
          ></input>
        </form>
        <button className='submit-button' onClick={props.checkAnswer}>Submit</button>
      </div>
    )
  }
  
  export default Display;