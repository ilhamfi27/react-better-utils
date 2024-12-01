import { useCallback, useState } from 'react';
import './App.css';
import { Show } from 'react-better-utils';

function App() {
  const [num, setNum] = useState(0);

  const increase = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div className="App">
      Hello, this is a React app with TypeScript! In this app, I will show you
      to use <code>react-better-code</code> dependency
      <div>
        <button onClick={increase}>Increase</button>
        <p>{num}</p>
      </div>
      <div className="contitional">
        <Show>
          <Show.When isTrue={num > 5 && num < 10}>
            Num is between then 6 and 9
          </Show.When>
          <Show.Else>Num is not between then 6 and 9</Show.Else>
        </Show>
      </div>
    </div>
  );
}

export default App;
