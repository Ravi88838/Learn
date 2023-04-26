import "./App.css";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [state, setState] = useState("Hi");
  useEffect(() => {});
  return (
    <Fragment>
      <h1>Hello 2</h1>
      {state}
    </Fragment>
  );
}

export default App;
