import React from 'react';

import HeaderContent from 'components/HeaderContent.jsx';
import IncrementOf from 'components/IncrementOf.jsx';
import PlayerCard from 'components/PlayerCard.jsx';
import YesNoModal from 'components/YesNoModal.jsx';
import { padNumber } from 'utils/utils';
import { DEFAULT_INCREMENT_NUM } from 'components/constants';

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
                defaultLabel: 'Player ' + padNumber(playersCount),
                isEditable: false,
                // Since we start rounds at one lets
                // just set the first index(0) to null
                rounds: ['null'],
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

    handleIncrementOfBlur = () => {
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

    handleUpdatingPlayersScore = (key, increment = false) => {
        const { currentRound, incrementBy } = this.state;
        const convertedIncrementOf = parseInt(incrementBy);

        let playersCards = { ...this.state.playersCards };
        let playerCard = playersCards[key];

        if (!playerCard.rounds[currentRound]) {
            playerCard.rounds[currentRound] = 0;
        }
        if (increment) {
            playerCard.rounds[currentRound] = playerCard.rounds[currentRound] += convertedIncrementOf;
        } else {
            playerCard.rounds[currentRound] = playerCard.rounds[currentRound] -= convertedIncrementOf;
        }
        this.setState({ playersCards });
    }

    editPlayersName = (element, key) => {
        element[key].contentEditable = true;

        setTimeout(function() {
          if (document.activeElement !== element[key]) {
              element[key].contentEditable = false;
          }
        }, 300);
    }

    setPlayersName = (element, key) => {
        const playerName = element[key];
        const playersCards = { ...this.state.playersCards };
        const playerCard = playersCards[key];

        if (playerName.innerText === '') {
            playerName.innerText = playerCard.defaultLabel;
        } else {
            playerCard.defaultLabel = playerName.innerText;
        }

        element[key].contentEditable = false;
        this.setState({ playersCards });
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
                    editPlayersName={this.editPlayersName}
                    createPlayersCards={this.createPlayersCards}
                    currentRound={currentRound}
                    handleUpdatingPlayersScore={this.handleUpdatingPlayersScore}
                    incrementBy={incrementBy}
                    playersCount={playersCount}
                    playersCards={playersCards}
                    setPlayersName={this.setPlayersName}
                />
                <IncrementOf
                    handleIncrementOfBlur={this.handleIncrementOfBlur}
                    handleChange={this.handleChange}
                    incrementBy={incrementBy}
                />
            </React.Fragment>
        );
    }
}
