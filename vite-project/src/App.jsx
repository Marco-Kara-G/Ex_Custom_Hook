import { Counter } from "./components/HookCounter";
import { HookFEtchAPI } from "./components/hookFetchAPI";
import { HookLocation } from "./components/hookLocation";
import { HookLogin } from "./components/hookLogin";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <HookLogin />
      <hr />
      <HookFEtchAPI />
      <hr />
      <HookLocation />
    </div>
  );
}

export default App;
