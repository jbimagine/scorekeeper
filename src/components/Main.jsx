import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import IncrementBy from './IncrementBy.jsx';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from './IncrementBy.jsx';
import { HeaderHeight } from './HeaderContent.jsx';
import YesNoModal from './YesNoModal.jsx';
import { padNumber } from '../utils/utils';

const PlayerContainerMargin = 40;
const DEFAULT_INCREMENT_NUM = '10';
const CombinedHeight = HeaderHeight + IncrementFooterHeight + PlayerContainerMargin;

const PlayerCntnr = styled.div`
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
    background: #adafcb;
    border-radius: 6px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #adafcb50;
    }
`;

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
