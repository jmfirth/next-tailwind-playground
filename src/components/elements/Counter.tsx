'use client';
import * as React from 'react';

export const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}