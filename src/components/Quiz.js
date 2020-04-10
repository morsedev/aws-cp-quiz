import React, { useState, useRef, forwardRef, useEffect } from 'react';
import styled from 'styled-components';

import questions from '../data/test.json';

import Question from './Question';
import Choice from './Choice';
import Answer from './Answer';
import Next from './Next';
import Score from './Score';

const Card = styled.div.attrs({
    className: `shadow-5 mw7 br2 tc ba center mt7`
})``

const ChoicesDiv = styled.form.attrs({
    className: `flex flex-column mb3`
})``

const AnswerDiv = styled.div.attrs({
    className: ``
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
    const [data, setData] = useState(questions.cards);
    const [question, setQuestion] = useState(data[index].card.question);
    const [choices, setChoices] = useState(shuffle(data[index].card.choices));
    const [answer, setAnswer] = useState(data[index].card.answer);
    const [selected, setSelected] = useState(false);
    const [score, setScore] = useState(0);
    const selection = useRef(null);

    const onSelection = () => {
        setSelected(true)
        console.log(selection.current)
        // selection.current.focus();
        // if (answer == e.target.value) {
        //     setScore(score + 1)
        // }
    }

    useEffect(() => {
        console.log(selection.current);
    }, [selection]);

    const updateCard = () => {  
        setIndex(index + 1)
        setQuestion(data[index + 1].card.question);
        setChoices(shuffle(data[index + 1].card.choices));
        setAnswer(data[index + 1].card.answer);
        setSelected(false)
        console.log(index)
        console.log(question)
        console.log(choices)
    }

    const onSubmit = () => {

    }

    return (   
            <Card>
                <Score score={score} index={index + 1} questNum={data.length}/>
                <Question question={question}/>
                <ChoicesDiv>
                    {
                        choices.map((choice, key) => {
                            return (
                                <Choice
                                    ref={selection}
                                    key={key}
                                    choice={choice}
                                    onClick={onSelection}
                                    value={choice}
                                />
                            )
                        })
                    }
                </ChoicesDiv>
                <SubmitBtn type="button" onClick={onSubmit}>
                    Submit
                </SubmitBtn>
                <AnswerDiv>
                    <Answer 
                        answer={answer}
                        selected={selected}
                    />
                    <NextDiv>
                        <Next 
                            selected={selected}
                            onClick={updateCard}
                        />
                    </NextDiv>
                </AnswerDiv>
            </Card>
    )
}