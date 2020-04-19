import React from 'react';
import styled from 'styled-components/macro';

import { CombinedHeight, PlayerContainerMargin } from './Main.jsx';
import Icon from '../icons/index';

const PlayerContainer = styled.div`
    height: ${props => props.height};
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: ${props => props.margin};

    &::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #adafcb;
    border-radius: 6px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #adafcb50;
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
    }

    handleValue = (player, increment = false) => {
        const { incrementBy } = this.props;
        if (!this[player].rounds) {
            this[player].rounds = [];
        }
        const convertedIncrementOf = parseInt(incrementBy);

        increment ? this[player].rounds.push(convertedIncrementOf) : this[player].rounds.push(- + convertedIncrementOf);

        // Add up the values in the array to get the sum that is displayed in the dom
        let sumOfRounds = this[player].rounds.reduce((a, b) => { return a + b; }, 0)

        this.setState({ [player]: sumOfRounds });
    }

    render() {
        const { playersCards, playersCount } = this.props;
        if (playersCount > 0) {
            return (
                <PlayerContainer
                    height={`calc(100vh - ${CombinedHeight}px)`}
                    margin={PlayerContainerMargin + 'px'}
                >
                    {Object.keys(playersCards).map((key, index) => {
                        const playerName = playersCards[key].label;
                        return (
                            <MainCntnr key={`${playerName}-${index}`}>
                                <IconCntnr>
                                    <Icon name='minusCirleIcon' style={{ cursor: 'pointer' }} />
                                </IconCntnr>
                                <PlayerName>{playerName}</PlayerName>
                                <PlayerScore>
                                    0
                            </PlayerScore>
                                <IconCntnr>
                                    <Icon name='plusCircleIcon' style={{ cursor: 'pointer' }} />
                                </IconCntnr>
                            </MainCntnr>
                        )
                    })}
                </PlayerContainer>
            )
        }
        return (
            null
        )
    }
}
