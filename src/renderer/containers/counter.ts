import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement, increment, incrementBy } from "../actions/counter";
import Counter from "../components/Counter";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => ({
    value: state.counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementBy: (payload: number) => dispatch(incrementBy(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
