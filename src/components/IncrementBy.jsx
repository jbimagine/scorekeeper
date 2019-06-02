import React from 'react';
import styled from 'styled-components/macro';

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

export default class IncrementBy extends React.Component {
    render () {
        const { incrementBy } = this.props;

        return (
            <>
            <IncremetnCntnr><IncrementBody>
            <IncrementContent>Increment By:</IncrementContent>
            <Input type='number'  value = { incrementBy } onChange = { this.props.handleChange }  justifyItems= 'end' />
            </IncrementBody></IncremetnCntnr>
            </>
        );
    }
}