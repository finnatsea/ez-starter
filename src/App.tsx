import React from "react";

import styled from "styled-components";

function App() {
  return (
    <AppHeader>
      <p>This is Finn&apos;s ez-starter repo.</p>
      <p>
        It includes great tools like:
        <ul>
          <li>typescript</li>
          <li>eslint</li>
          <li>prettier</li>
          <li>styled-components</li>
        </ul>
      </p>
      <p>Take it eazy man!</p>
    </AppHeader>
  );
}

export default App;

const AppHeader = styled.div`
  font-family: "Times", "serif";
`;
