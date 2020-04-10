import React from 'react';
import styled from 'styled-components';

const Choice = styled.div.attrs({
    className: `w-100 mb2`
})``

const ChoiceBtn = styled.a.attrs({
    className: `fw3 f3-ns f4 link hover br1 grow ph3 pv2 mb2 dib pointer`
})``


export default function Choices({ choice, onSelection, correct }) {
    return (
            <Choice>
                <ChoiceBtn onClick={onSelection}>
                    {choice}
                </ChoiceBtn>
            </Choice>
    )
}