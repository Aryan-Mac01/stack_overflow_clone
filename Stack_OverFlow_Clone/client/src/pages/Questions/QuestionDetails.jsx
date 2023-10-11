import React, { useState } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import upVotes from "../../assets/sort-up.svg"
import downVotes from "../../assets/sort-down.svg"
import Avatar from "../../components/Avatar/Avatar"
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
import { PostAnswer } from '../../actions/question'
const QuestionDetails = () => {

    const { id } = useParams()

    const questionList = useSelector(state => state.questionReducer)
    //console.log(questionList)


    // var questionsList = [{
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: 'What is a function?',
    //     questionBody: "It meant to be",
    //     questionTags: ["java","node js", "react js", "mongo db", "express js"
    //     ],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "Kumar",
    //         answeredOn: "jan2",
    //         userId: 1,
    //     }]
    //   },{
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: 'What is a function?',
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "Kumar",
    //         answeredOn: "jan2",
    //         userId: 2,
    //     }]
    //   },{
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: 'What is a function?',
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "Kumar",
    //         answeredOn: "jan2",
    //         userId: 3,
    //     }]
    //   }]

    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    console.log(location)
    const url = 'http://localhost:3000'
    const  handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            }else{
                dispatch(PostAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name }))
            }
        }
    }

    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url: '+url+location.pathname)
    }
    
  return (
    <div className='question-details-page'>
        {
            questionList.data === null?
            <h1>Loading...</h1>:
            <>
                {
                    questionList.data.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={upVotes} alt="" width="18" className='votes-icon' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={downVotes} alt="" width="18" className='votes-icon'/>
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
 
                                </div>
                            </section>
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswer key={question._id} question={question } handleShare={handleShare}  />
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>
                                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                                    <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tag'>{tag}</Link>
                                        ))
                                    } or {
                                        <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question. </Link>
                                    }

                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
      
    </div>
  )
}

export default QuestionDetails
