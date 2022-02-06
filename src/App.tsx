import React from 'react';
import {Suspense} from "react";
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

const TodoContainer = React.lazy(() => import ("./components/TodoContainer"));
const MainPage = React.lazy(() => import('./components/MainPage'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Загрузка...</div>}>
                <div className={'App'}>
                    <AppBar position="static">
                        <Toolbar variant="dense" className={'App-header'}>
                            <Link to="/"><Typography variant="h5">Home</Typography></Link>
                            <Link to="/todos"><Typography variant="h5">Todos</Typography></Link>
                        </Toolbar>
                    </AppBar>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path="/todos" element={<TodoContainer />}>
                        </Route>
                        <Route path="/" element={<MainPage />}>
                        </Route>
                    </Routes>
                </div>
            </Suspense>
        </Router>
    );
}

export default App;
