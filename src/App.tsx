import React from 'react';
import './App.css';
import {Rewards} from "./feature/reward/Rewards";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./feature/header/Header";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Header></Header>
                </Row>
                <Row>
                    <Rewards/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
