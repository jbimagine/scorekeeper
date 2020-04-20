import React from 'react';
import styled from 'styled-components/macro';
import { IncrementFooterHeight } from 'components/constants';

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
    text-align: center;

    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
`;

const WarningContainer = styled.div`
    margin-bottom: 8px;
    color: #CCC;
    bottom: ${IncrementFooterHeight}px;
    position: absolute;
`;

const INCREMENT_OF_STR = 'Increment of: ';
const INVALID_VALUE_MESSAGE = 'Cannot have an empty, negative, or zero value.  Default value will be set';

export default class IncrementOf extends React.Component {

    render() {
        const {
            handleIncrementOfBlur,
            handleChange,
            incrementBy
        } = this.props;

        const hasInvalidValue = incrementBy === '' || incrementBy <= 0;
        return (
            <React.Fragment>
                <IncremetnCntnr>
                    {hasInvalidValue && <WarningContainer>{INVALID_VALUE_MESSAGE}</WarningContainer>}
                    <IncrementBody>
                        <IncrementContent>{INCREMENT_OF_STR}</IncrementContent>
                        <Input
                            type={'number'}
                            value={incrementBy}
                            onChange={handleChange}
                            onBlur={handleIncrementOfBlur}
                            justifyItems='end'
                        />
                    </IncrementBody>
                </IncremetnCntnr>
            </React.Fragment>
        );
    }
}
