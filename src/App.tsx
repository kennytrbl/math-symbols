import React from "react";
import "./App.css";

const App = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  // Copy to clipboard handler
  const handleRowClick = (latex: string, index: number) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(latex.replace(/\$/g, "")); // Remove $ for plain LaTeX
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1200);
    }
  };
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
            <th>LaTeX</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((symbolData, index) => {
            // Map symbol to LaTeX code
            const latexMap: Record<string, string> = {
              "=": "$=$",
              "≠": "$\\neq$",
              "≈": "$\\approx$",
              ">": "$>$",
              "<": "$<$",
              "≥": "$\\geq$",
              "≤": "$\\leq$",
              "+": "$+$",
              "-": "$-$",
              "±": "$\\pm$",
              "√": "$\\sqrt{}$",
              "n√": "$\\sqrt[n]{}$",
              "∠": "$\\angle$",
              "∟": "$\\urcorner$",
              "°": "$^\\circ$",
              "⊥": "$\\perp$",
              "∥": "$\\parallel$",
              "≅": "$\\cong$",
              "Δ": "$\\Delta$",
              "π": "$\\pi$",
              "≡": "$\\equiv$",
              ":=": "$:=$",
              "(f ∘ g)": "$(f \\circ g)$",
              "∑": "$\\sum$",
              "γ": "$\\gamma$",
              "φ": "$\\varphi$",
              "A^T": "$A^T$",
              "A†": "$A^\\dagger$",
              "A^*": "$A^*$",
              "A^-1": "$A^{-1}$",
              "⋂": "$\\cap$",
              "⋃": "$\\cup$",
              "μ": "$\\mu$",
              "σ^2": "$\\sigma^2$",
              "⊆": "$\\subseteq$",
              "⊂": "$\\subset$",
              "⊄": "$\\nsubseteq$",
              "⊇": "$\\supseteq$",
              "⊃": "$\\supset$",
              "⊅": "$\\nsupseteq$",
              "∈": "$\\in$",
              "∉": "$\\notin$",
              "∅": "$\\emptyset$",
              "⊕": "$\\oplus$",
              "⇒": "$\\Rightarrow$",
              "⇔": "$\\Leftrightarrow$",
              "∀": "$\\forall$",
              "∃": "$\\exists$",
              "∄": "$\\nexists$",
              "∴": "$\\therefore$",
              "ε": "$\\varepsilon$",
              "∫": "$\\int$",
              "α": "$\\alpha$",
              "β": "$\\beta$",
              "δ": "$\\delta$",
              "θ": "$\\theta$",
              "λ": "$\\lambda$",
              "ψ": "$\\psi$",
            };
            const latex = latexMap[symbolData.symbol] || "";
            return (
              <tr
                key={index}
                style={{ cursor: "pointer", background: copiedIndex === index ? "#e0ffe0" : undefined }}
                title="Click to copy LaTeX"
                onClick={() => handleRowClick(latex, index)}
              >
                <td>{symbolData.symbol}</td>
                <td>{symbolData.name}</td>
                <td>{symbolData.description}</td>
                <td>{symbolData.example}</td>
                <td>
                  <code>{latex}</code>
                  {copiedIndex === index && <span style={{ color: "green", marginLeft: 8 }}> copied!</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="footer">
        a creation by{" "}
        <a href="https://kennyzhang.dev/" target="_blank" rel="noreferrer">
          Kenny Zhang
        </a>
      </p>
    </div>
  );
};

export default App;
