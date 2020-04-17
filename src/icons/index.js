import React from 'react';
import styled from 'styled-components/macro';

import PlusIcon from './PlusIcon';
import ResetIcon from './ResetIcon';
import RoundsIcon from './RoundsIcon';
import PlusCircleIcon from './PlusCircleIcon';
import MinusCirleIcon from './MinusCirleIcon';
import SettingsIcon from './SettingsIcon';

const Icon = props => {
    switch (props.name) {
        case "plusIcon":
            return <PlusIcon {...props} />;
        case "resetIcon":
            return <ResetIcon {...props} />;
        case "roundsIcon":
            return <RoundsIcon {...props} />;
        case "plusCircleIcon":
            return <PlusCircleIcon {...props} />;
        case "minusCirleIcon":
            return <MinusCirleIcon {...props} />;
        case "settingsIcon":
            return <SettingsIcon {...props} />;
        default:
            return;
    }
};

export default Icon;
