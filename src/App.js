import React from 'react';
import Header from "./components/templates/Header";
import GeneratedRoutes from './GeneratedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <GeneratedRoutes key="all-routes"/>
            </Router>
        </div>
    );
}

export default App;
