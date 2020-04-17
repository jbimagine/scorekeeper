import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import IncrementBy from './IncrementBy.jsx';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from './IncrementBy.jsx';
import { HeaderHeight } from './HeaderContent.jsx';
import { padNumber } from '../utils/utils';

const PlayerContainerMargin = 40;
const DEFAULT_INCREMENT_NUM = '10';
const CombinedHeight = HeaderHeight + IncrementFooterHeight + PlayerContainerMargin;

const PlayerCntnr = styled.div`
    height: calc(100vh - ${CombinedHeight}px );
    overflow: scroll;
    margin-bottom: ${PlayerContainerMargin}px;
`;

export default class Main extends React.Component {
    state = {
        playersCount: 0,
        incrementBy: DEFAULT_INCREMENT_NUM,
        playersCards: {},
        currentRound: 1,
    }

    createPlayersCards = () => {
        let playersCount = this.state.playersCount;

        playersCount += 1;
        let playersCards = { ...this.state.playersCards };
        playersCards = Object.assign(playersCards, {
            ...playersCards,
            [playersCount]: {
                label: 'Player ' + padNumber(playersCount),
                rounds: {},
            }
        })
        this.setState({ playersCards, playersCount });
    }

    resetPlayersData = () => {
        this.setState({ playersCards: {}, playersCount: 0 })
    }

    getCurrentRound = () => {

    }

    handleChange = (event) => {
        this.setState({ incrementBy: event.target.value });
    }

    handleBlur = () => {
        const { incrementBy } = this.state;

        if (incrementBy === '') {
            this.setState({ incrementBy: DEFAULT_INCREMENT_NUM });
        }
    }

    render() {
        const {
            currentRound,
            incrementBy,
            playersCards
        } = this.state;

        return (
            <React.Fragment>
                <HeaderContent
                    resetPlayersData={this.resetPlayersData}
                    createPlayersCards={this.createPlayersCards}
                    currentRound={currentRound}
                />
                <PlayerCntnr>
                    {this.state.playersCount > 0 ?
                        <PlayerCard
                            createPlayersCards={this.createPlayersCards}
                            incrementBy={incrementBy}
                            playersCards={playersCards}
                        /> : null}
                </PlayerCntnr>
                <IncrementBy
                    handleBlur={this.handleBlur}
                    handleChange={this.handleChange}
                    incrementBy={incrementBy}
                />
            </React.Fragment>
        );
    }
}
