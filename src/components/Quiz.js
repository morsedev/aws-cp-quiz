import React, { useState, useRef, forwardRef } from 'react';
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

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column mb3`
})``

const AnswerDiv = styled.div.attrs({
    className: ``
})``

const NextDiv = styled.div.attrs({
    className: `tr mb2`
})``

export default function Quiz() {
    const fisherYates = (array) => {
        var ctr = array.length, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }

    const [index, setIndex] = useState(0);
    const [data, setData] = useState(questions.cards);
    const [question, setQuestion] = useState(data[index].card.question);
    const [choices, setChoices] = useState(data[index].card.choices);
    const [answer, setAnswer] = useState(fisherYates(data[index].card.answer));
    const [selected, setSelected] = useState(false);
    const [score, setScore] = useState(0);
    const selection = useRef();

    const onSelection = () => {
        setSelected(true)
        console.log(selection)
        const val = selection.current
        console.log(val)
        // selection.current.focus();
        // if (answer == e.target.value) {
        //     setScore(score + 1)
        // }
    }

    const updateCard = () => {  
        setIndex(index + 1)
        setQuestion(data[index + 1].card.question);
        setChoices(data[index + 1].card.choices);
        setAnswer(fisherYates(data[index + 1].card.answer));
        setSelected(false)
        console.log(index)
        console.log(question)
        console.log(choices)
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
                                    forwardRef={selection}
                                    key={key}
                                    choice={choice}
                                    onClick={onSelection}
                                    value={choice}
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
                        />
                    </NextDiv>
                </AnswerDiv>
            </Card>
    )
}