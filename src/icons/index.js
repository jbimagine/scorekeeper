import React from 'react';

import ChevronDown from 'icons/ChevronDown';
import PlusIcon from 'icons/PlusIcon';
import ResetIcon from 'icons/ResetIcon';
import RoundsIcon from 'icons/RoundsIcon';
import PlusCircleIcon from 'icons/PlusCircleIcon';
import MinusCirleIcon from 'icons/MinusCirleIcon';
import SettingsIcon from 'icons/SettingsIcon';

const Icon = props => {
    switch (props.name) {
        case 'chevronDown':
            return <ChevronDown {...props} />
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
