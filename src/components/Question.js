import React from 'react';
import tachyons from 'tachyons';
import styled from 'styled-components';

const QuestionDiv = styled.div.attrs({
    className: ``
})``

const QuestionP = styled.p.attrs({
    className: `f2-ns fw3-ns`
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