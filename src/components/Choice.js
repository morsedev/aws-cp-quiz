import React from 'react';
import styled from 'styled-components';

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column`
})``

const Choice = styled.div.attrs({
    className: `w-100`
})``

const ChoiceBtn = styled.a.attrs({
    className: `fw3-ns f3-ns link hover br1 grow ph3 pv2 mb2 dib pointer`
})``

export default function Choices({ choice, onClick, correct }) {
    return (
        <ChoicesDiv>
            <Choice>
                <ChoiceBtn onClick={onClick}>
                    { choice }
                </ChoiceBtn>
            </Choice>
        </ChoicesDiv>
    )
}