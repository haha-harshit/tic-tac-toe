// import logo from "./logo.svg";
// import "./App.css";

import { Board } from "./components/Board";

import "./componentStyle/root.scss";

function App() {
    return (
        <>
            <div className="app">
                <header className="App-header">
                    <h1>Tic Tac Toe ✔</h1>
                </header>
                <Board />
            </div>
        </>
    );
}

export default App;
