import React from 'react';
import StatusButton from '../StatusButton/StatusButton';
import { StatusIndicator } from '../StatusIndicator/StatusIndicator';
import { TaskWrapper, TitleTask, InformationTaskWrapper, DateTask, StatusButtonWrapper, StatusIndicatorWrapper } from './styled';

interface Props {
    status: string;
    title: string;
    date: string;
}

const Task = (props: Props) => {
    return (
        <TaskWrapper>
            <StatusIndicatorWrapper>
                <StatusIndicator status={props.status}></StatusIndicator>
            </StatusIndicatorWrapper>
            <InformationTaskWrapper>
                <TitleTask>{props.title}</TitleTask>
                <DateTask>{props.date}</DateTask>
            </InformationTaskWrapper>
            <StatusButtonWrapper>
                <StatusButton
                    status={props.status}
                    onPress={() => console.log("que miras ctm")}
                    disabled={false}
                    title="Done"
                ></StatusButton>
            </StatusButtonWrapper>
        </TaskWrapper>
    );
}

export default Task;