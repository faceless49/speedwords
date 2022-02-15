import React from 'react';
import './App.css';
import {Welcome} from './components/Welcome';
import {Typing} from './components/Typing';
import {Result} from './components/Result';

function App() {
  const [step, setStep] = React.useState('welcome');
  const [stats, setStats] = React.useState({
    words: 0,
    sec: 0,
  });

  const startGame = () => {
    setStep('typing');
  };

  const finishGame = (words:string, sec:string) => {
    setStep('result');
    setStats({
      words,
      sec,
    });
  };

  const steps = {
    welcome: <Welcome onClickStart={startGame} />,
    typing: <Typing onFinish={finishGame} />,
    result: <Result stats={stats} />,
  };

  return (
    <div className="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );

export default App;
