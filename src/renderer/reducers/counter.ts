import { Reducer } from "redux";
import { CounterAction, CounterActionType } from "../actions/counter";

export interface CounterState {
    readonly value: number;
}

const defaultState: CounterState = {
    value: 0,
};

export const counterReducer: Reducer<CounterState, CounterAction> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case CounterActionType.Increment:
            return {
                ...state,
                value: state.value + 1,
            };
        case CounterActionType.Decrement:
            return {
                ...state,
                value: state.value - 1,
            };

        case CounterActionType.IncrementBy:
            return {
                ...state,
                value: state.value + action.payload,
            };
        default:
            return state;
    }
};
