import React from 'react'
import Questions from './Questions1'
const QuestionList = ({questionsList}) => {
  return (
    <>
      {
        questionsList.map((question) => (
            <Questions question={question} key={question.id} />
          ))
        
      }
    </>
  )
}

export default QuestionList
