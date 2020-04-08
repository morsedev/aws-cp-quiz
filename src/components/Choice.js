import React from 'react';
import tachyons from 'tachyons';
import styled from 'styled-components';

const ChoicesDiv = styled.div.attrs({
    className: `flex flex-column`
})``

const Choice = styled.div.attrs({
    className: `w-100`
})``

const ChoiceP = styled.a.attrs({
    className: `fw3-ns f3-ns link hover br1 grow ph3 pv2 mb2 dib black pointer`
})``

export default function Choices({ choice }) {
    return (
        <ChoicesDiv>
            <Choice>
                <ChoiceP>
                    { choice }
                </ChoiceP>
            </Choice>
        </ChoicesDiv>
    )
}