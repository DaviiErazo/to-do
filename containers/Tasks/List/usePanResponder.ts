import { useRef } from "react";
import {
	PanResponder,
	GestureResponderEvent,
	PanResponderGestureState,
	GestureResponderHandlers,
	Animated,
	Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

type State = {
	offsetTop: Animated.Value;
	viewScale: Animated.Value;
	initialTop: Animated.Value;
};

export default function usePanResponder(): [State, GestureResponderHandlers] {
	const offsetTop = useRef(new Animated.Value(0)).current;
	const viewScale = useRef(new Animated.Value(0)).current;
	const initialTop = useRef(new Animated.Value(0)).current;

	const handleOnMoveShouldSetPanResponder = 
        (event: GestureResponderEvent, gestureState: PanResponderGestureState) => true;

	const handleOnPanResponderGrant = 
        (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {};
	
	const handleOnPanResponderMove = 
        (event: GestureResponderEvent,gestureState: PanResponderGestureState) => {
			offsetTop.setValue(gestureState.dy);

			const initial = Number.parseInt(JSON.stringify(initialTop));
			const offset = Number.parseInt(JSON.stringify(offsetTop));

			if (initial < 0) {
				viewScale.setValue(initial * -1);
			} else {
				viewScale.setValue(offset * -1);
			}
        };

	const handleOnPanResponderRelease = 
        (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
			const initial = Number.parseInt(JSON.stringify(initialTop));

			initialTop.setValue(initial + gestureState.dy);
			offsetTop.setValue(0);

            if (gestureState.moveY > height * 0.2) {
                Animated.spring(initialTop, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }
        };

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: handleOnMoveShouldSetPanResponder,
			onPanResponderGrant: handleOnPanResponderGrant,
			onPanResponderMove: handleOnPanResponderMove,
			onPanResponderRelease: handleOnPanResponderRelease,
			onPanResponderTerminate: handleOnPanResponderRelease,
		})
	);

	const state = {
		offsetTop,
		initialTop,
		viewScale,
	};
	return [state, panResponder.current.panHandlers];
}
