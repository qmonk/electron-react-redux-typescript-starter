import React, { useState } from "react";

type Props = {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (value: number) => void;
};

const Counter: React.FC<Props> = ({ value, increment, decrement, incrementBy }: Props) => {
    const [valueToIncrement, setValueToIncrement] = useState(42);

    return (
        <>
            Counter current value: <span>{value}</span>
            <br /> <br />
            <button onClick={increment}>Increment</button>{" "}
            <button onClick={decrement}>Decrement</button>
            <br /> <br />
            <button
                onClick={() => {
                    incrementBy(valueToIncrement);
                }}
            >
                Increment by:
            </button>{" "}
            <input
                type="number"
                value={valueToIncrement}
                onChange={(e) => setValueToIncrement(parseInt(e.target.value))}
            />
        </>
    );
};

export default Counter;
