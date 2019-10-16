import React from 'react';
// import Header from "./components/templates/Header";
import GeneratedRoutes from './GeneratedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from "./components/NavBar/NavBar";


function App() {
    return (
        <div>
            <Router>
                {/*<Header />*/}
                {/*<NavBar/>*/}
                <GeneratedRoutes key="all-routes"/>
            </Router>
        </div>
    );
}

export default App;
