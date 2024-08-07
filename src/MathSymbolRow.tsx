import React from "react";

type MathSymbolRowProps = {
  symbol: string;
  name: string;
  description: string;
  example: string;
};

const MathSymbolRow = ({
  symbol,
  name,
  description,
  example,
}: MathSymbolRowProps) => {
  const handleRowClick = () => {
    navigator.clipboard.writeText(symbol);
    alert(`Copied ${symbol} to clipboard`);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{symbol}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{example}</td>
    </tr>
  );
};

export default MathSymbolRow;
