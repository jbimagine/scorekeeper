import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import IncrementBy from './IncrementBy.jsx';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from './IncrementBy.jsx';
import { HeaderHeight } from './HeaderContent.jsx';

const PlayerContainerMargin = 24;
const CombinedHeight = HeaderHeight + IncrementFooterHeight + PlayerContainerMargin;

const PlayerCntnr = styled.div `
    height: calc(100vh - ${CombinedHeight}px );
    overflow: scroll;
    margin-bottom: ${PlayerContainerMargin}px;
`;

export default class Main extends React.Component {
    state = {
        playersCount: 0,
        incrementBy: 10,
    }

    incrementPlayers = () => {
        this.setState({playersCount: this.state.playersCount + 1});
    }

     padNumber = (number) => {
   
        return (number < 10 ? '0' : '') + number
      
   }

    addPlayers = () => {
        let numArray = [];
        let player = 0;
        for (let i = 0; i < this.state.playersCount; i++) {
            player+=1;
            numArray.push({['Player '+ this.padNumber(player)]:i+1});
        }

        return numArray;
    }

    createPlayers = () => {
         return this.addPlayers();
    }

    resetPlayersCount = () => {   
        this.setState({playersCount: 0})
    }

    handleChange = (event) => {
        this.setState({incrementBy: parseInt(event.target.value)});
    }

    render() {
      return (
          <>
            <HeaderContent 
                incrementPlayers = { this.incrementPlayers }
                resetPlayersCount = { this.resetPlayersCount }
            />
            <PlayerCntnr>
            {
                this.state.playersCount > 0 ?
                <PlayerCard 
                createPlayers = { this.createPlayers }
                incrementBy = { this.state.incrementBy }
            />:null
            }
            </PlayerCntnr>
            <IncrementBy 
                handleChange = { this.handleChange }
                incrementBy = { this.state.incrementBy }
            />
          </>
        );
    }
  }
