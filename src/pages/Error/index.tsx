import { Link } from "react-router-dom";

import "./error.css";
import React from "react";

const Error: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/mentoria">Volte para a página da mentoria.</Link>
    </div>
  );
};

export default Error;
