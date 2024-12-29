import { useState } from "react";

export function UseCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterAdd = () => {
    setCounter((c) => c + 1);
  };
  const handleCounterRemove = () => {
    setCounter((c) => c - 1);
  };
  const handleCounterReset = () => {
    setCounter(initialValue);
  };

  return {
    value: counter,
    onAdd: handleCounterAdd,
    onRemove: handleCounterRemove,
    onReset: handleCounterReset,
  };
}
