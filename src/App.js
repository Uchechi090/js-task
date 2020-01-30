import React from "react";
import logo from "./logo.svg";
import nodes from "./nodes";
import "./App.css";
import TreeRoot from "./components/TreeRoot";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Tree-Selector</h2>
    </header>
    <main className="App-main">
      <h1>Node Picker Assignment</h1>
      <h2>Requirements</h2>
      <ul>
        <li>
          A list of Nodes, each with a reference to their parent, should be
          displayed hierarchically
        </li>
        <li>The user should be able to select nodes</li>
        <li>Selected nodes should be visually highlighted somehow</li>
      </ul>
      <h3>Bonus tasks</h3>
      <ul>
        <li>
          The user should be able to select groups (a node and its immediate
          children) without selecting every node individually).
        </li>
        <li>
          Add some tests where you think the code could benefit from having
          tests.
        </li>
      </ul>
      <p>
        The solution does not need to be visually styled in any special way. The
        hierarchy and the selection should be visible of course.
      </p>

      <h2>Get Started</h2>
      <p>
        You can find the required list of nodes in the <code>nodes.ts</code>{" "}
        file:
      </p>
      <pre className="nodes">
        <code>{JSON.stringify(nodes, null, 2)}</code>
      </pre>

      <p>Good luck and please don't hesitate to ask if anything is unclear!</p>
      <TreeRoot />
    </main>
  </div>
);

export default App;
