import React, { useState } from 'react';
import styled from 'styled-components';

import questions from '../data/test.json';

import Question from './Question';
import Choice from './Choice';
import Answer from './Answer';
import Next from './Next';

const Card = styled.div.attrs({
    className: `shadow-5 mw7 br2 tc ba center mt7`
})``

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column mb4`
})``

export default function Quiz() {

    const [index, setIndex] = useState(0);
    const [data, setData] = useState(questions.cards);
    const [question, setQuestion] = useState(data[index].card.question);
    const [choices, setChoices] = useState(data[index].card.choices);
    const [answer, setAnswer] = useState(data[index].card.answer);
    const [selected, setSelected] = useState(false);
    const [score, setScore] = useState(0);

    const onSelection = () => {
        setSelected(true)
    }

    const updateCard = () => {  
        setIndex(index + 1)
        setQuestion(data[index + 1].card.question);
        setChoices(data[index + 1].card.choices);
        setAnswer(data[index + 1].card.answer);
        console.log(index)
        console.log(question)
        console.log(choices)
    }

    return (   
            <Card>
                <Question question={question}/>
                <ChoicesDiv>
                    {
                        choices.map((choice, key) => {
                            return (
                                <Choice 
                                    key={key}
                                    choice={choice}
                                    onClick={onSelection}
                                />
                            )
                        })
                    }
                </ChoicesDiv>
                <Answer 
                    answer={answer}
                    selected={selected}
                />
                <Next 
                    selected={selected}
                    onClick={updateCard}/>
            </Card>
    )
}