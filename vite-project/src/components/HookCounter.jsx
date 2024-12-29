import { UseCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
  const { value, onAdd, onRemove, onReset } = UseCounter(initialValue);

  return (
    <div>
      <h2>counter Value: {value}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
