import React, { useState, useRef, forwardRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import questions from '../data/exam.json';

import Question from './Question';
import Choice from './Choice';
import Answer from './Answer';
import Next from './Next';
import Score from './Score';
import Reset from './Reset';

const Card = styled.div.attrs({
    className: `shadow-5 mw7 br2 tc ba center mt5`
})``

const ChoicesDiv = styled.form.attrs({
    className: `flex flex-column mb3`
})``

const AnswerDiv = styled.div.attrs({
    className: `pt3`
})``

const NextDiv = styled.div.attrs({
    className: `tr mb2`
})``

const SubmitBtn = styled.a.attrs({
    className: `f4 ba border-box inline-flex items-center fw3 bg-animate link pointer hover-bg-blue hover-white no-underline pa2 br2`
})``

export default function Quiz() {
    const shuffle = array => [...array].sort(() => 0.5 - Math.random());

    const [index, setIndex] = useState(0);
    const [data, setData] = useState(shuffle(questions.cards));
    const [question, setQuestion] = useState(data[index].card.question);
    const [choices, setChoices] = useState(shuffle(data[index].card.choices));
    const [answer, setAnswer] = useState(data[index].card.answer);
    const [selected, setSelected] = useState(false);
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(false);
    const [passThreshold, setPassThreshold] = useState(70);

    const onSelection = e => {
        console.log(index)
        e.persist()
        const text = e.target.text.toLowerCase()
        if (!selected && answer.toLowerCase() == text) {
            setScore(score + 1)
        }
        setSelected(true)
    }

    const updateCard = () => {
        var questStr = ""
        var choiceArr = []
        var answerStr = ""

        if (index == data.length-1) {
            const percentage = ((index / data.length) * 100).toFixed(2);
            questStr = (percentage >= 70 ? "You passed!" : "You failed..")
            setEnd(true)
        } else {
            setIndex(index + 1)
            questStr = data[index + 1].card.question;
            choiceArr = shuffle(data[index + 1].card.choices);
            answerStr = data[index + 1].card.answer;
            setSelected(false)
        }

        setQuestion(questStr)
        setChoices(choiceArr)
        setAnswer(answerStr)
    }

    const reset = () => {
        setIndex(0)
        setSelected(false)
        setEnd(false)
        setScore(0)
        setData(shuffle(questions.cards))
        setQuestion(data[0].card.question);
        setChoices(shuffle(data[0].card.choices));
        setAnswer(data[0].card.answer);
    }

    return (   
            <Card>
                <Score 
                    score={((score / data.length) * 100).toFixed(2)} 
                    index={index + 1} numOfQuest={data.length}
                    passThreshold={passThreshold}
                />
                <Question question={question}/>
                <ChoicesDiv>
                    {
                        choices.map((choice, key) => {
                            return (
                                <Choice
                                    key={key}
                                    choice={choice}
                                    onSelection={onSelection}
                                />
                            )
                        })
                    }
                </ChoicesDiv>
                <AnswerDiv>
                    <Answer 
                        answer={answer}
                        selected={selected}
                    />
                    <NextDiv>
                        <Next 
                            selected={selected}
                            onClick={updateCard}
                            end={end}
                        />
                    </NextDiv>
                    <Reset 
                        reset={reset}
                        end={end}
                    />
                </AnswerDiv>
            </Card>
    )
}