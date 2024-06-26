import React, { useState } from 'react';
import { add, substract, multiply, divide } from './helpers';
import { Button } from './components/Button';
import { Input } from './components/Input';

const App = () => {
  const [inputOne, setInputOne] = useState<number>(0);
  const [inputTwo, setInputTwo] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const mathOps = [
    { symbol: '+', operation: add },
    { symbol: '-', operation: substract },
    { symbol: '*', operation: multiply },
    { symbol: '/', operation: divide },
  ];

  const handleSubmit = (
    calcFunc: (a: number, b: number) => number | string
  ) => {
    const calcResult = calcFunc(Number(inputOne), Number(inputTwo));
    setResult(calcResult);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-xl mb-4 text-black text-center">
        Useful app
      </h1>
      <div>
        <div className="grid grid-cols-2 gap-x-4">
          <Input
            value={inputOne}
            handleOnchange={(e) => {
              setInputOne(parseFloat(e.target.value));
            }}
          />
          <Input
            value={inputTwo}
            handleOnchange={(e) => setInputTwo(parseFloat(e.target.value))}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-4 my-4">
          {mathOps.map((mathOp, index) => (
            <Button
              key={`Button_${mathOp.symbol}_${index}`}
              handleClick={() => handleSubmit(mathOp.operation)}
              disabled={isNaN(Number(inputOne)) || isNaN(Number(inputTwo))}
            >
              {mathOp.symbol}
            </Button>
          ))}
        </div>
        <div className="text-black">Result: {result}</div>
      </div>
    </div>
  );
};

export default App;
