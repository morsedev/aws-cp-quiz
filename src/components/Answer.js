import React from 'react';
import styled from 'styled-components';

const AnswerP = styled.p.attrs({
    className: `fw3 f3 green mb5`
})`
    display: ${props => props.selected ? "inline" : "none"}
`

export default function Answer({ answer, selected }) {
    return (
        <AnswerP selected={selected}>
            {answer}
        </AnswerP>
    )
}