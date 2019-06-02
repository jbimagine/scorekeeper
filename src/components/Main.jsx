import React from 'react';
import styled from 'styled-components/macro';
import HeaderContent from './HeaderContent.jsx';
import PlayerCard from './PlayerCard.jsx';
import Icon from '../icons/index';

export default class Main extends React.Component {
    state = {
        playersCount: 0,

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

    render() {
      return (
          <>
            <HeaderContent 
                incrementPlayers = { this.incrementPlayers }
                resetPlayersCount = { this.resetPlayersCount }
            />
            {
                this.state.playersCount > 0 ?
                <PlayerCard 
                createPlayers = { this.createPlayers }
            />:null
            }
          </>
        );
    }
  }
