import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import IncrementBy from './IncrementBy.jsx';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from './IncrementBy.jsx';
import { HeaderHeight } from './HeaderContent.jsx';

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
        playersCount: 1,
        incrementBy: DEFAULT_INCREMENT_NUM,
        playersCards: {},
    }

    incrementPlayers = () => {
        this.setState({ playersCount: this.state.playersCount + 1 });
    }

    // adds a zero to the front of any player's number less than 10
    // eg Player 1 will be Player 01
    padNumber = (number) => {
        return (number < 10 ? '0' : '') + number
    }

    createPlayersCards = () => {
        this.incrementPlayers();
        const { playersCount } = this.state;
        let playersCards = { ...this.state.playersCards };
        playersCards = Object.assign(playersCards, {
            ...playersCards,
            [playersCount]: {
                label: 'Player ' + this.padNumber(playersCount),
                rounds: {},
            }
        })
        this.setState({ playersCards });
    }

    resetPlayersData = () => {
        this.setState({ playersCards: {}, playersCount: 0 })
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
        return (
            <React.Fragment>
                <HeaderContent
                    resetPlayersData={this.resetPlayersData}
                    createPlayersCards={this.createPlayersCards}
                />
                <PlayerCntnr>
                    {this.state.playersCount > 0 ?
                        <PlayerCard
                            createPlayersCards={this.createPlayersCards}
                            incrementBy={this.state.incrementBy}
                            playersCards={this.state.playersCards}
                        /> : null}
                </PlayerCntnr>
                <IncrementBy
                    handleBlur={this.handleBlur}
                    handleChange={this.handleChange}
                    incrementBy={this.state.incrementBy}
                />
            </React.Fragment>
        );
    }
}
