import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../icons/index';

const MainCntnr = styled.div `
    color: #FFF;
    font-size: 24px;
    display: flex;
    width: 100vw;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 16px 24px 16px;
    align-items: center;
`;

const IconCntnr = styled.div `
    height: 100%;
    width: auto;
    display: grid;
    justify-content: ${props=> props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
`;

const PlayerName = styled.div `
    width: 100%;
    padding-left: 16px;
`;

const PlayerScore = styled.div `
    padding-right: 16px;
`;

const IncremetnCntnr = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 24px;
    color: #FFF;
`;

const IncrementBody = styled.div `
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

const IncrementContent = styled.div `
    display: grid;
    justify-items: ${props => props.justifyItems ? props.justifyItems: 'start'};
`

const Input = styled.input `
    justify-self: ${props => props.justifyItems ? props.justifyItems: 'start'};
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
        incrementBy: 10,
    }

    handleChange = (event) => {
        this.setState({incrementBy: parseInt(event.target.value)});
    }

    handleValue = (key, increment = false) => {
        if(!this[key].rounds) {
            this[key].rounds = [];
        }

        if (increment) {
            this[key].rounds.push(this.state.incrementBy);
        }
        else {
            this[key].rounds.push(- + this.state.incrementBy);
        }

        // Add up the values in the array to get the sum that is displayed in the dom
        let sumOfRounds = this[key].rounds.reduce((a, b) => { return a + b; }, 0)

        this.setState({[key] : sumOfRounds});
    }

    render() {
        const { incrementBy } = this.state;
        return (
            <>
            {
            Object.keys(this.props.createPlayers()).map(key => {
                let players = this.props.createPlayers()[key];
                return (
                <MainCntnr key = { key } >
                    <IconCntnr onClick={() => this.handleValue(key)} ><Icon name='minusCirleIcon'/></IconCntnr>
                    <PlayerName >{Object.keys(players)}</PlayerName>
                    <PlayerScore ref={el => this[key] = el}>{ this.state[key] ? this.state[key] : 0 }</PlayerScore>
                    <IconCntnr onClick={() => this.handleValue(key, true)} ><Icon name='plusCircleIcon'/></IconCntnr>
                </MainCntnr>
                )
            } )
            }
            <IncremetnCntnr><IncrementBody>
            <IncrementContent>Increment By:</IncrementContent>
            <Input type='number'  value = { incrementBy } onChange = { this.handleChange }  justifyItems= 'end' />
            </IncrementBody></IncremetnCntnr>
            </>
        );
    }
}
