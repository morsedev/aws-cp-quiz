import React from 'react';
import styled from 'styled-components';

const ResetDiv = styled.div.attrs({
    className: `mb3`
})``

const ResetBtn = styled.a.attrs({
    className: `fw3 f3 dim pointer link`
})`
display: ${props => props.end ? "inline" : "none"}
`

export default function({ reset, end }) {
    return (
        <ResetDiv>
            <ResetBtn 
                onClick={reset}
                end={end}
            >
                Reset
            </ResetBtn>
        </ResetDiv>
    )
}