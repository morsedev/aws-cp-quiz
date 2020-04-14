import React from 'react';
import styled from 'styled-components';

const ScoreDiv = styled.div.attrs({
    className: `flex`
})``

const ScoreCol = styled.div.attrs({
    className: `w-50`
})``

const ScoreP = styled.p.attrs({
    className: `tl ml4 fw3 f4`
})`
    color: ${props => props.score >= props.passThreshold ? "green" : "red"}
`

const QuestNum = styled.p.attrs({
    className: `tr mr4 fw3 f4`
})``

export default function Score({ score, index, numOfQuest, passThreshold }) {
    return (
        <ScoreDiv>
            <ScoreCol>
                <ScoreP score={score} passThreshold={passThreshold}>
                    {score}%
                </ScoreP>
            </ScoreCol>
            <ScoreCol>
                <QuestNum>
                    {index}/{numOfQuest}
                </QuestNum>
            </ScoreCol>
        </ScoreDiv>
    )
}