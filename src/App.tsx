import React from "react";
import "./App.css";
import MathSymbolRow from "./MathSymbolRow";

const App = () => {
  const symbols = [
    {
      symbol: "=",
      name: "equal sign",
      description: "equality",
      example: "2 + 2 = 4",
    },
    {
      symbol: "≠",
      name: "not equal sign",
      description: "inequality",
      example: "2 + 2 ≠ 5",
    },
    {
      symbol: "≈",
      name: "approximately equal to",
      description: "approximation",
      example: "π ≈ 3.14159",
    },
  ];

  return (
    <div>
      <h1>Math Symbols</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((symbolData, index) => (
            <MathSymbolRow
              key={index}
              symbol={symbolData.symbol}
              name={symbolData.name}
              description={symbolData.description}
              example={symbolData.example}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
