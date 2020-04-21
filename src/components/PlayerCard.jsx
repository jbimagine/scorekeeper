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
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 16px;
    color: #FFF;
    font-size: 24px;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 16px 24px 16px;
    align-items: center;
`;

const IconCntnr = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
`;

const PlayerRowContainer = styled.div`
    width: 100%;
    align-items: center;
    grid-template-columns: auto auto 1fr;
    grid-gap: 16px;
    display: grid;
`;

const PlayerName = styled.div`
    width: auto;
    cursor: pointer;
    grid-column: ${props => props.gridColumn};
`;

const PlayerScore = styled.div`
    justify-self: end;
`;

export default class PlayerCard extends React.Component {
    render() {
        const {
            editPlayersName,
            currentRound,
            handleUpdatingPlayersScore,
            playersCards,
            playersCount,
            setPlayersName,
        } = this.props;
        const hasPlayers = playersCount > 0;
        return (
            <PlayerContainer>
                {hasPlayers && Object.keys(playersCards).map((key, index) => {
                    const playerName = playersCards[key].defaultLabel;
                    const playerRoundScore = playersCards[key].rounds;
                    const isPlayerNameEditable = playersCards[key].isEditable;
                    return (
                        <MainCntnr key={`${playerName}-${index}`}>
                            <IconCntnr onClick={() => handleUpdatingPlayersScore(key, false)}>
                                <Icon name='minusCirleIcon' style={{ cursor: 'pointer' }} />
                            </IconCntnr>
                            <PlayerRowContainer>
                                <PlayerName
                                    suppressContentEditableWarning
                                    id={'player-name-' + key}
                                    ref={el => this[key] = el}
                                    contentEditable={isPlayerNameEditable}
                                    onBlur={() => setPlayersName(this, key)}
                                    onClick={() => editPlayersName(this, key)}
                                >
                                    {playerName}
                                </PlayerName>
                                <IconCntnr>
                                    <Icon name='chevronDown' style={{ cursor: 'pointer', width: '18px', height: '18px' }} />
                                </IconCntnr>
                                <PlayerScore id={'player-score' + key}>
                                    {playerRoundScore[currentRound]}
                                </PlayerScore>
                            </PlayerRowContainer>
                            <IconCntnr gridColumn='3' onClick={() => handleUpdatingPlayersScore(key, true)}>
                                <Icon name='plusCircleIcon' style={{ cursor: 'pointer' }} />
                            </IconCntnr>
                        </MainCntnr>
                    )
                })}
            </PlayerContainer>
        )

    }
}
