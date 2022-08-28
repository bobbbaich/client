import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './Instructions.js'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload. <br/>
                    Update check cache - invalidated by pipeline in the pool.
                </p>
                <p>Cache has been invalidated</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Instructions/>
        </div>
    );
}

export default App;
