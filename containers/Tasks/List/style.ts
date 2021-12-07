import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

export const ListBackground = styled.View`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #5a405c;
`;

export const ListWrapper = styled.SafeAreaView`
	flex: 1;
`;

export const ListEventHeader = styled.Text`
	font-size: 30px;
	line-height: 32px;
	font-weight: 800;
	color: #5f4761;
`;

export const ListEventWrapper = styled.View`
	flex: 1;
  margin: 16px 32px 32px 32px;
`;

export const ListAddEvent = styled.TouchableOpacity`
	width: 100px;
  height: 100px;
	background-color: #ff7d4e;
	border-radius: 20px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	justify-content: center;
	align-items: center;
`;

export const ListEventCard = styled.View`
  width: 100%;
	background-color: #ffffff;
  border-radius: 50px;
  min-height: ${height / 2 }px;
`;

export const ListLineCardWrapper = styled.View`
  padding: 16px;
`;

export const ListLineCard = styled.View`
  width: ${width * 0.3}px;
  height: 3px;
  background-color: #5f4761;
  align-self: center;
  margin-top: 16px;
  border-radius: 50px;
 `;
