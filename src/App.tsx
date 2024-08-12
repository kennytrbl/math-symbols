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
    {
      symbol: ">",
      name: "greater than",
      description: "comparison",
      example: "5 > 4",
    },
    {
      symbol: "<",
      name: "less than",
      description: "comparison",
      example: "4 < 5",
    },
    {
      symbol: "≥",
      name: "greater than or equal to",
      description: "comparison",
      example: "4 ≥ 4",
    },
    {
      symbol: "≤",
      name: "less than or equal to",
      description: "comparison",
      example: "4 ≤ 4",
    },
    {
      symbol: "+",
      name: "plus sign",
      description: "addition",
      example: "2 + 2 = 4",
    },
    {
      symbol: "-",
      name: "minus sign",
      description: "subtraction",
      example: "4 - 2 = 2",
    },
    {
      symbol: "±",
      name: "plus-minus sign",
      description: "plus or minus",
      example: "x = ±2",
    },
    {
      symbol: "*",
      name: "asterisk",
      description: "multiplication",
      example: "2 * 2 = 4",
    },
    {
      symbol: "x",
      name: "multiplication sign",
      description: "multiplication",
      example: "2 x 2 = 4",
    },
    {
      symbol: "·",
      name: "middle dot",
      description: "multiplication",
      example: "2 · 2 = 4",
    },
    {
      symbol: "÷",
      name: "division sign",
      description: "division",
      example: "4 ÷ 2 = 2",
    },
    {
      symbol: "/",
      name: "division sign",
      description: "division",
      example: "4 / 2 = 2",
    },
    {
      symbol: "_",
      name: "horizontal line",
      description: "division",
      example: "4 _ 2 = 2",
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
