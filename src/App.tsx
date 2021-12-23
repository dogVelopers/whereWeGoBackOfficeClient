import React, { useState } from 'react';
import Test from './components/Test';
import './App.css';

function App() {
  const [num, setNum] = useState<number>(1);
  const name: string = 'asdf';

  return (
    <div className="App">
      <Test num={1} name={'123'} setNum={setNum}></Test>
    </div>
  );
}

export default App;
