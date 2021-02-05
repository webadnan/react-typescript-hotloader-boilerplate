import * as React from 'react';
import {render} from 'react-dom';
import { Router, Route } from 'react-router-dom';
import App from './App';
import JustTable from './JustTable';

let createHistory = require("history").createBrowserHistory

function AppRouter() {
  let history = createHistory()
  return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={(props) => (<App />)} />
          <Route exact path="/home" render={(props) => (<JustTable />)} />
        </div>
      </Router>
  );
}

render(AppRouter(), document.getElementById('root'));
