import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponent/Header/Header';
import Post from './conponent/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './conponent/PostDetails/PostDetails';
import NotFound from './conponent/NotFound/NotFound';

function App() {
  return (
    <div>
      <h1>wow</h1>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/postDetails/:id">
            <PostDetails/>
          </Route>
          <Route  path="/Home">
            <Post></Post>
          </Route>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
