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
      symbol: "√",
      name: "square root",
      description: "root of degree 2",
      example: "√4 = 2",
    },
    {
      symbol: "n√",
      name: "nth root",
      description: "root of degree n",
      example: "3√8 = 2",
    },
    {
      symbol: "∠",
      name: "angle",
      description: "angle measurement",
      example: "∠ABC = 90°",
    },
    {
      symbol: "∟",
      name: "right angle",
      description: "angle measurement",
      example: "a = 90°",
    },
    {
      symbol: "°",
      name: "degree",
      description: "angle measurement",
      example: "90° = π/2",
    },
    {
      symbol: "⊥",
      name: "perpendicular",
      description: "perpendicular lines",
      example: "AB ⊥ CD",
    },
    {
      symbol: "∥",
      name: "parallel",
      description: "parallel lines",
      example: "AB ∥ CD",
    },
    {
      symbol: "≅",
      name: "congruent",
      description: "congruence",
      example: "AB ≅ CD",
    },
    {
      symbol: "Δ",
      name: "delta",
      description: "triangle",
      example: "ΔABC",
    },
    {
      symbol: "π",
      name: "pi",
      description: "circle constant",
      example: "π ≈ 3.14159",
    },
    {
      symbol: "≡",
      name: "identical to",
      description: "definition",
      example: "a ≡ b",
    },
    {
      symbol: ":=",
      name: "becomes",
      description: "definition",
      example: "a := b",
    },
    {
      symbol: "(f ∘ g)",
      name: "composition",
      description: "composition of functions",
      example: "(f ∘ g)(x) = f(g(x))",
    },
    {
      symbol: "∑",
      name: "summation",
      description: "sum",
      example: "∑n = 1 to 5 n = 15",
    },
    {
      symbol: "γ",
      name: "gamma",
      description: "Euler's constant",
      example: "γ ≈ 0.57721",
    },
    {
      symbol: "φ",
      name: "phi",
      description: "golden ratio",
      example: "φ = (1 + √5) / 2",
    },
    {
      symbol: "A^T",
      name: "transpose",
      description: "transpose of matrix",
      example: "A^T = [a_ij]^T",
    },
    {
      symbol: "A†",
      name: "hermitian matrix",
      description: "conjugate transpose of matrix",
      example: "A† = (A^T)*",
    },
    {
      symbol: "A^*",
      name: "hermitian matrix",
      description: "conjugate transpose of matrix",
      example: "A^* = (A^T)*",
    },
    {
      symbol: "A^-1",
      name: "inverse",
      description: "inverse of matrix",
      example: "A^-1 * A = I",
    },
    {
      symbol: "⋂",
      name: "intersection",
      description: "set intersection",
      example: "A ⋂ B",
    },
    {
      symbol: "⋃",
      name: "union",
      description: "set union",
      example: "A ⋃ B",
    },
    {
      symbol: "μ",
      name: "mu",
      description: "mean",
      example: "μ = (Σx) / n",
    },
    {
      symbol: "σ^2",
      name: "sigma squared",
      description: "variance",
      example: "σ^2 = Σ(x - μ)^2 / n",
    },
    {
      symbol: "⊆",
      name: "subset",
      description: "subset",
      example: "A ⊆ B",
    },
    {
      symbol: "⊂",
      name: "proper subset",
      description: "proper subset",
      example: "A ⊂ B",
    },
    {
      symbol: "⊄",
      name: "not subset",
      description: "not subset",
      example: "A ⊄ B",
    },
    {
      symbol: "⊇",
      name: "superset",
      description: "superset",
      example: "A ⊇ B",
    },
    {
      symbol: "⊃",
      name: "proper superset",
      description: "proper superset",
      example: "A ⊃ B",
    },
    {
      symbol: "⊅",
      name: "not superset",
      description: "not superset",
      example: "A ⊅ B",
    },
    {
      symbol: "∈",
      name: "element of",
      description: "element of set",
      example: "x ∈ A",
    },
    {
      symbol: "∉",
      name: "not element of",
      description: "not element of set",
      example: "x ∉ A",
    },
    {
      symbol: "∅",
      name: "empty set",
      description: "empty set",
      example: "∅",
    },
    {
      symbol: "⊕",
      name: "xor",
      description: "exclusive or",
      example: "A ⊕ B",
    },
    {
      symbol: "⇒",
      name: "implies",
      description: "implies",
      example: "A ⇒ B",
    },
    {
      symbol: "⇔",
      name: "if and only if",
      description: "if and only if",
      example: "A ⇔ B",
    },
    {
      symbol: "∀",
      name: "for all",
      description: "for all",
      example: "∀x",
    },
    {
      symbol: "∃",
      name: "there exists",
      description: "there exists",
      example: "∃x",
    },
    {
      symbol: "∄",
      name: "there does not exist",
      description: "there does not exist",
      example: "∄x",
    },
    {
      symbol: "∴",
      name: "therefore",
      description: "therefore",
      example: "A ∴ B",
    },
    {
      symbol: "ε",
      name: "epsilon",
      description: "small positive number",
      example: "ε > 0",
    },
    {
      symbol: "∫",
      name: "integral",
      description: "integral",
      example: "∫f(x)dx",
    },
    {
      symbol: "α",
      name: "alpha",
      description: "alpha",
      example: "α",
    },
    {
      symbol: "β",
      name: "beta",
      description: "beta",
      example: "β",
    },
    {
      symbol: "δ",
      name: "delta",
      description: "delta",
      example: "δ",
    },
    {
      symbol: "θ",
      name: "theta",
      description: "theta",
      example: "θ",
    },
    {
      symbol: "λ",
      name: "lambda",
      description: "lambda",
      example: "λ",
    },
    {
      symbol: "ψ",
      name: "psi",
      description: "psi",
      example: "ψ",
    },
  ];

  return (
    <div>
      <h3>Math Symbols</h3>
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
