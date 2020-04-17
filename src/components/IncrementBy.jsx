import React from 'react';
import styled from 'styled-components/macro';

export const IncrementFooterHeight = 80;

const IncremetnCntnr = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    color: #FFF;
    height: ${IncrementFooterHeight}px;
    display:flex;
    flex-direction: column;
    line-height: 16px;
    align-items: center;
    box-sizing: border-box;
    bottom: 16px;
    position: absolute;
`;

const IncrementBody = styled.div`
    width: 90vw;
    height: 60px;
    box-sizing: border-box;
    padding: 0 16px;
    border: 1px solid #FFF;
    border-radius: 6px;
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

const WarningContainer = styled.div`
    margin-bottom: 8px;
    color: #CCC;
    bottom: ${IncrementFooterHeight}px;
    position: absolute;
`;

const INCREMENT_OF_STR = 'Increment of: ';
const DECREMENT_OF_STR = 'Decrement of: ';
const NO_VALUE_STR = 'No valid value';

export default class IncrementBy extends React.Component {

    handleIncrementDecrementStr = () => {
        const { incrementBy } = this.props;
        if (incrementBy > Number('0')) {
            return INCREMENT_OF_STR;
        } else if (incrementBy === '0' || incrementBy === '') {
            return NO_VALUE_STR;
        }
        return DECREMENT_OF_STR;
    }

    render() {
        const {
            handleBlur,
            handleChange,
            incrementBy
        } = this.props;

        const hasEmptyValue = incrementBy === '';
        return (
            <React.Fragment>
                <IncremetnCntnr>
                    {hasEmptyValue && <WarningContainer>Cannot have an empty value.  Default value will be set</WarningContainer>}
                    <IncrementBody>
                        <IncrementContent>{this.handleIncrementDecrementStr()}</IncrementContent>
                        <Input
                            type={'number'}
                            value={incrementBy}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            justifyItems='end'
                        />
                    </IncrementBody>
                </IncremetnCntnr>
            </React.Fragment>
        );
    }
}
