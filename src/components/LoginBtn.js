import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div.attrs({
    className: `fw3 f3 dim pointer link w-50 ml5 mb2`
})``

const LoginText = styled.a.attrs({
    className: ``
})``

export default function LoginBtn({ text, className }) {
    return (
        <LoginDiv>
            <LoginText>
                {text}
            </LoginText>
        </LoginDiv>
    )
}