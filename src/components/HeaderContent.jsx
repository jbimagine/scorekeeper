import React from 'react';
import styled from 'styled-components/macro';

import Icon from 'icons/index';
import { padNumber } from 'utils/utils';
import { HeaderHeight } from 'components/constants';

const MainCntnr = styled.div`
  height: ${HeaderHeight}px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  box-sizing: border-box;
  color: #FFF;
  font-size: 24px;
`;

const TitleCntnr = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Title = styled.div`
`;

const SubTitle = styled.div`
	font-size: 18px;
	grid-column: 2;
	justify-self: center;
	margin-top: 8px;
`;

const SettingsCntnr = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridColumns ? props.gridColumns : '1fr 1fr'};
  justify-items: center;
  align-items: center;
`;

const IconCntnr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
`;

export default class HeaderContent extends React.Component {
	render() {
		const {
			createPlayersCards,
			currentRound,
			handleShowingResetWarningModal,
		} = this.props;

		return (
			<MainCntnr>
				<SettingsCntnr >
					<IconCntnr justifyContent='flex-start'><Icon name='roundsIcon' style={{ cursor: 'pointer' }} /></IconCntnr>
					<IconCntnr><Icon name='settingsIcon' style={{ cursor: 'pointer' }} /></IconCntnr>
				</SettingsCntnr>
				<TitleCntnr>
					<Title>Scorekeeper</Title>
				</TitleCntnr>
				<SettingsCntnr>
					<IconCntnr
						onClick={() => handleShowingResetWarningModal()}
					>
						<Icon name='resetIcon' style={{ cursor: 'pointer' }} />
					</IconCntnr>
					<IconCntnr
						justifyContent='flex-end'
						onClick={() => createPlayersCards()}
					>
						<Icon name='plusIcon' style={{ cursor: 'pointer' }} />
					</IconCntnr>
				</SettingsCntnr>
				<SubTitle>Round: {padNumber(currentRound)}</SubTitle>
			</MainCntnr>
		);
	}
}
