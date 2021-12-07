import React from 'react';
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

interface IStatusIndicator {
    [key: string]: React.ReactNode
}

const StatusIndicatorWrapper = styled.View`
    justify-Content: center;
    align-Items: center;
`;

const StatusIndicatorParent = styled.View.attrs({
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 1,
})`
    border-radius: 50px;
    width: 30px;
    height: 30px;
`;

const DoneStatus = styled(StatusIndicatorParent)`
    background-color: #ea8282;
    justify-content: center;
    align-items: center;
    line-height: 30px;
`;

const InProgressStatus = styled(StatusIndicatorParent)`
    border: #a2abfb 5px;
`;

const NotStartStatus = styled(StatusIndicatorParent)`
    border: #8dd4fd 5px;
`;

const DoneStatusWithCheck = () => {
    return (
        <DoneStatus>
            <Ionicons
                name="md-checkmark"
                size={20} color="white"
                style={{ fontWeight: "bold" }}
            />
        </DoneStatus>
    )
}

const STATUS_COMPONENT: IStatusIndicator = {
    Done: DoneStatusWithCheck(),
    InProgress: <InProgressStatus />,
    NotStart: <NotStartStatus />
}

export const StatusIndicator = ({ status }: { status: string }) => {
    return (
        <StatusIndicatorWrapper>
            {STATUS_COMPONENT[status]}
        </StatusIndicatorWrapper>
    );
}