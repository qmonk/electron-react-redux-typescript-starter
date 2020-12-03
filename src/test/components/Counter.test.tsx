import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "../../renderer/components/Counter";

type ComponentProps = React.ComponentProps<typeof Counter>;

const baseProps: ComponentProps = {
    value: 0,
    decrement: jest.fn,
    increment: jest.fn,
    incrementBy: jest.fn,
};

const renderComponent = (props: Partial<ComponentProps> = {}) => {
    const rtlProps = render(<Counter {...baseProps} {...props} />);
    return {
        ...rtlProps,
        rerender: (newProps: Partial<ComponentProps>) =>
            rtlProps.rerender(<Counter {...baseProps} {...props} {...newProps} />),
    };
};

it("renders without error", () => {
    renderComponent();
});

it("increments the counter", () => {
    let count = 0;
    const { getByText, rerender } = renderComponent({ value: count, increment: () => count++ });

    const counter = getByText("0");
    const btnIncrement = getByText("Increment");

    fireEvent.click(btnIncrement);
    rerender({ value: count });

    expect(count).toBe(1);
    expect(counter.textContent).toBe("1");
});

it("decrements the counter", () => {
    let count = 0;
    const { getByText, rerender } = renderComponent({ value: count, decrement: () => count-- });

    const counter = getByText("0");
    const btnDecrement = getByText("Decrement");

    fireEvent.click(btnDecrement);
    rerender({ value: count });

    expect(count).toBe(-1);
    expect(counter.textContent).toBe("-1");
});

it("increments by user input", () => {
    let count = 0;
    const { getByText, rerender } = renderComponent({
        value: count,
        incrementBy: (payload) => (count = count + payload),
    });

    const counter = getByText("0");
    const btnIncrementBy = getByText("Increment by:");

    fireEvent.click(btnIncrementBy);
    rerender({ value: count });

    expect(count).toBe(42);
    expect(counter.textContent).toBe("42");
});
