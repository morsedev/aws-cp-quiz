import React from 'react';
import styled from 'styled-components';

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column`
})``

const Choice = styled.div.attrs({
    className: `w-100 flex items-center mb2 ba`
})``

const ChoiceBtn = styled.input.attrs({
    className: `fw3-ns f3-ns link hover br1 grow ph3 pv2 mb2 dib pointer mr2`
})``

const Label = styled.label.attrs({
    className: `fw3 f3 lh-copy`
})``

export default function Choices({ choice, onClick, correct }) {
    return (

            <Choice>
                <ChoiceBtn type="checkbox" onClick={onClick} value={choice}>
                    
                </ChoiceBtn>
                <Label>{choice}</Label>
            </Choice>
    )
}