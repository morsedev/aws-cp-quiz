import React from 'react';
import styled from 'styled-components';

const NextBtn = styled.a.attrs({
    className: `link pointer dim tr f3 mr3`
})`
    display: ${props => props.selected && !props.end ? "inline" : "none"}
`

export default function Next({ selected, onClick, end }) {
    return (
        <NextBtn 
            selected={selected}
            onClick={onClick}
            end={end}
        >
            >>
        </NextBtn>
    )
}