import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import IncrementBy from './IncrementBy.jsx';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from './IncrementBy.jsx';
import { HeaderHeight } from './HeaderContent.jsx';
import YesNoModal from './YesNoModal.jsx';
import { padNumber } from '../utils/utils';

export const PlayerContainerMargin = 40;
const DEFAULT_INCREMENT_NUM = '10';
export const CombinedHeight = HeaderHeight + IncrementFooterHeight + PlayerContainerMargin;

export default class Main extends React.Component {
    state = {
        playersCount: 0,
        incrementBy: DEFAULT_INCREMENT_NUM,
        playersCards: {},
        currentRound: 1,
        showResetModal: false,
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
        this.handleHidingResetWarningModal();
    }

    getCurrentRound = () => {
        return this.state.currentRound;
    }

    setCurrentRound = (round) => {
        this.setState({ currentRound: round });
    }

    handleChange = (event) => {
        this.setState({ incrementBy: event.target.value });
    }

    handleBlur = () => {
        const { incrementBy } = this.state;
        const hasInvalidValue = incrementBy === '' || incrementBy <= 0;

        if (hasInvalidValue) {
            this.setState({ incrementBy: DEFAULT_INCREMENT_NUM });
        }
    }

    handleShowingResetWarningModal = () => {
        const { playersCount } = this.state;
        if (playersCount > 0) {
            this.setState({ showResetModal: true });
        }
    }

    handleHidingResetWarningModal = () => {
        this.setState({ showResetModal: false });
    }

    render() {
        const {
            currentRound,
            incrementBy,
            playersCards,
            playersCount,
            showResetModal,
        } = this.state;

        return (
            <React.Fragment>
                {showResetModal && <YesNoModal
                    text={`Are you sure you want to reset?  Doing so will erase all player data.`}
                    yes={this.resetPlayersData}
                    no={this.handleHidingResetWarningModal}
                />}
                <HeaderContent
                    createPlayersCards={this.createPlayersCards}
                    handleShowingResetWarningModal={this.handleShowingResetWarningModal}
                    currentRound={currentRound}
                />
                <PlayerCard
                    createPlayersCards={this.createPlayersCards}
                    incrementBy={incrementBy}
                    playersCount={playersCount}
                    playersCards={playersCards}
                />
                <IncrementBy
                    handleBlur={this.handleBlur}
                    handleChange={this.handleChange}
                    incrementBy={incrementBy}
                />
            </React.Fragment>
        );
    }
}
