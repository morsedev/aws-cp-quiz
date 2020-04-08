import React from 'react';
import tachyons from 'tachyons';
import styled from 'styled-components';
import questions from '../test.json';
import Question from './Question';
import Choice from './Choice';

const Cards = styled.div.attrs({
    className: `tc flex flex-column`
})``

const Card = styled.div.attrs({
    className: `shadow-5 mw7`
})``

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column`
})``

const Choices = styled.div.attrs({
    className: ``
})``

export default function Quiz() {
    return (
        <Cards>
            {
                questions.cards.map(entry => {
                    return (
                        <Card>
                            <Question question={entry.card.question}/>
                            <ChoicesDiv>
                                {
                                    entry.card.choices.map(entry => {
                                        return (
                                            <Choices>
                                                <Choice choice={entry}/>
                                            </Choices>
                                        )
                                    })
                                }
                            </ChoicesDiv>
                        </Card>
                    )
                })
            }
        </Cards>
    )
}