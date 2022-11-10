import { CounterContexProvider } from "CounterContex/CounterContex";
import { Counter } from "./Counter/Counter";

export const App = () => {
  return (
    <CounterContexProvider>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection:"column",
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Counter/>
      </div>
    </CounterContexProvider>
  );
};
