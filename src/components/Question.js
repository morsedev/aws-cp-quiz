import React from 'react';
import styled from 'styled-components';

const QuestionDiv = styled.div.attrs({
    className: ``
})``

const QuestionP = styled.p.attrs({
    className: `f2-ns fw3-ns fw4 tracked f3 ma4`
})``

export default function Question({ question }) {
    return (
        <QuestionDiv>
            <QuestionP>
                { question }
            </QuestionP>
        </QuestionDiv>
    )
}