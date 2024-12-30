import React from 'react';

const App: React.FC = () => {
  const greeting: string = "Hello, TypeScript!";

  const numberList: number[] = [5, 10, 15];

  const calculateSum = (a: number, b: number): number => a + b;

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Number List:</h2>
      <ul>
        {numberList.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Sun Example:</h2>
      <p>The Sum of 5 and 10 is: {calculateSum(5, 10)}</p>
    </div>
  );
};

export default App;
