import { Action } from "redux";
import { ActionWithPayload } from "../types";

enum ActionType {
    Increment = "Counter/Increment",
    Decrement = "Counter/Decrement",
    IncrementBy = "Counter/IncrementBy",
}

interface Increment extends Action {
    type: ActionType.Increment;
}

interface Decrement extends Action {
    type: ActionType.Decrement;
}

interface IncrementBy extends ActionWithPayload<number> {
    type: ActionType.IncrementBy;
}

export const increment = (): Increment => ({
    type: ActionType.Increment,
});

export const decrement = (): Decrement => ({
    type: ActionType.Decrement,
});

export const incrementBy = (payload: number): IncrementBy => ({
    type: ActionType.IncrementBy,
    payload: payload,
});

export { ActionType as CounterActionType };
export type CounterAction = Increment | Decrement | IncrementBy;
