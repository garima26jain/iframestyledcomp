import React from "react";
import { WithStyledComponents, StyledTitle } from "./StyledCompFrame";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <figure>
        <figcaption>With styled-components</figcaption>
        <WithStyledComponents title="with-styled-components">
          <StyledTitle>A stylish framed component!</StyledTitle>
        </WithStyledComponents>
      </figure>
    </div>
  );
}
