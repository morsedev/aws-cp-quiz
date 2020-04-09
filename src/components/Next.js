import React from 'react';
import styled from 'styled-components';

const NextBtn = styled.a.attrs({
    className: `link pointer dim fixed f3`
})`
    display: ${props => props.selected ? "inline" : "none"}
`

export default function Next({ selected, onClick }) {
    return (
        <NextBtn selected={selected} onClick={onClick}>
            >>
        </NextBtn>
    )
}