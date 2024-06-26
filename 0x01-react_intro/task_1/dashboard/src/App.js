import logo from "./logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

export default function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr />

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr />

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}
