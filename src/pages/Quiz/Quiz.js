import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import './Quiz.css';
import Question from '../../components/Question/Question'

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
    const [options, setOptions] = useState();
    const [currques, setCurrques] = useState(0);
    useEffect(() => {
        console.log(questions);
        setOptions(questions && handleShuffle([questions[currques]?.correct_answer, ...questions[currques]?.incorrect_answers]))
    }, [questions,currques]);

    console.log(options);

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
            <span className="subtitle">Welcome, {name}</span>
            {questions ? (<>

                <div className="quizInfo">
                    <span>{questions[currques].category}</span>
                    <span>
                        Score : {score}
                    </span>
                </div>
                <Question
                    currques={currques}
                    setCurrques={setCurrques}
                    questions={questions}
                    options={options}
                    correct={questions[currques]?.correct_answer}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                />

            </>) :
                (<CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1}
                />)}
        </div>
    )
}

export default Quiz
