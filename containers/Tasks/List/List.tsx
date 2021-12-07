import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Create: undefined;
  Tasks: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Tasks'>;

import {
  StyleSheet,
  Animated,
  StatusBar,
  Dimensions,
  ScrollView,
  RefreshControl,
  NativeScrollEvent
} from "react-native";

import {
  ListBackground,
  ListWrapper,
  ListEventHeader,
  ListEventWrapper,
  ListAddEvent,
  ListLineCard,
  ListLineCardWrapper
} from "./style";

import { Calendar, Task } from "../../../components";
import usePanResponder from "./usePanResponder";
import { tasks } from './mocks';

const { height } = Dimensions.get("window");

const List = ({ route, navigation }: Props) => {
  const [state, panHandlers] = usePanResponder();
  const { offsetTop, initialTop, viewScale } = state;

  const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
    const paddingToBottom = 20
    return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom
  }

  const decreaseOpacity = offsetTop.interpolate({
    inputRange: [0, height * 0.5],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const ViewScaleValue = viewScale.interpolate({
    inputRange: [0, 370],
    outputRange: [height / 2, height * 0.9],
    extrapolate: "clamp",
  });

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <ListBackground>
        <ListWrapper>
          <Calendar />
          <Animated.View
            style={[ListStyles.animatedWrapperCard,
            {
              top: Animated.add(initialTop, offsetTop),
              opacity: decreaseOpacity
            }]}
          >
            <Animated.View
              style={[ListStyles.listEventCard, { height: ViewScaleValue }]}
            >
              <ListLineCardWrapper
                {...panHandlers}
              >
                <ListLineCard />
              </ListLineCardWrapper>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={false}
                    onRefresh={() => console.log("asdasd")}
                  />
                }
                onMomentumScrollEnd={({ nativeEvent }) => {
                  if (isCloseToBottom(nativeEvent)) {
                    console.log("ASDASDASDASDASDAS")
                  }
                }}
              >
                <ListEventWrapper>
                  <ListEventHeader>Today</ListEventHeader>
                  {tasks.map((value, i) =>
                    <Task
                      key={i}
                      title={value.title}
                      date={value.date}
                      status={value.status}
                    />
                  )}
                </ListEventWrapper>
              </ScrollView >
            </Animated.View>
          </Animated.View>
        </ListWrapper>
        <LinearGradient
          style={ListStyles.linearGradient}
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />
        <ListAddEvent>
          <AntDesign name="plus" size={35} color="white" onPress={() => navigation.navigate('Create')} />
        </ListAddEvent>
      </ListBackground>

    </React.Fragment>
  );
};

const ListStyles = StyleSheet.create({
  animatedWrapperCard: {
    flex: 1,
    bottom: 0,
    maxHeight: height * 0.8
  },
  scrollView: {
    flex: 1,
  },
  linearGradient: {
    bottom: 0,
    height: 100,
  },
  listEventCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    minHeight: height / 2
  }
});

export default List;
