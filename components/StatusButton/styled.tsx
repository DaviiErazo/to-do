import styled from "styled-components/native";

interface IStatusButton {
    [key: string]: string
}

interface Props {
    status: string;
    disabled: boolean;
}

const STATUS_COMPONENT: IStatusButton = {
    Done: "#ea8282",
    InProgress: "#a2abfb",
    NotStart: "#8dd4fd"
}

const StatusButtonParent = styled.TouchableOpacity`
    border-radius: 24px;
    padding: 8px 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: #ffffff;
`;

export const StatusButton = styled(StatusButtonParent) <Props>`
    opacity: ${p => (p.disabled ? 0.3 : 1)};
    background-color: ${p => STATUS_COMPONENT[p.status]};
    border-color: ${p => STATUS_COMPONENT[p.status]};
`;

export const StyledButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  font-weight: 500;
`;
