import React from 'react';
import styled from 'styled-components/macro';

import { CombinedHeight, PlayerContainerMargin } from 'components/constants';
import Icon from 'icons/index';

const PlayerContainer = styled.div`
    height: calc(100vh - ${CombinedHeight}px );
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: ${PlayerContainerMargin}px;

    &::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #adafcb70;
    border-radius: 6px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #adafcb;
    }
`;

const MainCntnr = styled.div`
    color: #FFF;
    font-size: 24px;
    display: flex;
    width: 100vw;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 16px 24px 16px;
    align-items: center;
`;

const IconCntnr = styled.div`
    height: 100%;
    width: auto;
    display: grid;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
`;

const PlayerName = styled.div`
    width: 100%;
    padding-left: 16px;
`;

const PlayerScore = styled.div`
    padding-right: 16px;
`;

const IncremetnCntnr = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 24px;
    color: #FFF;
`;

const IncrementBody = styled.div`
    width: 90vw;
    height: 60px;
    box-sizing: border-box;
    padding: 0 16px;
    border: 1px solid #FFF;
    display: grid;
    align-items: center;
    font-size: 24px;
    grid-template-columns: 1fr 1fr;
`;

const IncrementContent = styled.div`
    display: grid;
    justify-items: ${props => props.justifyItems ? props.justifyItems : 'start'};
`

const Input = styled.input`
    justify-self: ${props => props.justifyItems ? props.justifyItems : 'start'};
    height: 30px;
    width: 60px;
    background: none;
    border-radius: 2px;
    color: #FFF;
    font-size: 24px;
    border: none;
    box-sizing:border-box;
    margin: 0 4px;
    padding: 0 4px;
`;

export default class PlayerCard extends React.Component {
    state = {
        editName: false,
    }

    render() {
        const {
            currentRound,
            handleUpdatingPlayersScore,
            playersCards,
            playersCount
        } = this.props;
        const hasPlayers = playersCount > 0;
        return (
            <PlayerContainer>
                {hasPlayers && Object.keys(playersCards).map((key, index) => {
                    const playerName = playersCards[key].label;
                    const playerRoundScore = playersCards[key].rounds;
                    return (
                        <MainCntnr key={`${playerName}-${index}`}>
                            <IconCntnr onClick={() => handleUpdatingPlayersScore(key, false)}>
                                <Icon name='minusCirleIcon' style={{ cursor: 'pointer' }} />
                            </IconCntnr>
                            <PlayerName
                                suppressContentEditableWarning
                                contentEditable={this.state.editName}
                                onBlur={() => this.setState({editName: false})}
                                onDoubleClick={() => this.setState({ editName: true })}
                            >
                                {playerName}
                            </PlayerName>
                            <PlayerScore ref={el => this[key] = el}>
                                {playerRoundScore[currentRound]}
                            </PlayerScore>
                            <IconCntnr  onClick={() => handleUpdatingPlayersScore(key, true)}>
                                <Icon name='plusCircleIcon' style={{ cursor: 'pointer' }} />
                            </IconCntnr>
                        </MainCntnr>
                    )
                })}
            </PlayerContainer>
        )

    }
}
