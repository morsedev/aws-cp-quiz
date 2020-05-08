import React from 'react';
import styled from 'styled-components';
import LoginBtn from './LoginBtn';

const Flex = styled.div.attrs({
    className: `flex-column mt4`
})``

export default function Login() {
    return (
        <Flex>
            <LoginBtn text='Sign In'/>
            <LoginBtn text='Sign Up'/>
        </Flex>
    )
}