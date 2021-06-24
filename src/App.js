// import logo from "./logo.svg";
// import "./App.css";
import { Board } from "./components/Board";

function App() {
    let myStyle = {
        marginLeft: "10px",
        // backgroundColor: "red",
    };

    return (
        <>
            <div className="App">
                <div style={myStyle}>
                    <header className="App-header">
                        <h1>Tic Tac Toe</h1>
                    </header>
                    <Board />
                </div>
            </div>
        </>
    );
}

export default App;
