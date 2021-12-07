import React from 'react';
import { StatusButton as StyledButton, StyledButtonText } from './styled'

interface Props {
    title: string;
    status: string;
    onPress: () => void;
    disabled: boolean;
}

const StatusButton = (p: Props) => {
    const { title, status, disabled, onPress } = p;

    return (
        <StyledButton
            status={status}
            disabled={disabled}
            onPress={() => onPress()}
        >
            <StyledButtonText>{title}</StyledButtonText>
        </StyledButton>
    )
}

export default StatusButton;