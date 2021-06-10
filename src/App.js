/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Category from './components/Category';
import Quiz from './components/Quiz';

import { clearMessage } from './actions/actionCreators/message';

function App() {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history = {history}>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/quiz" component={Quiz} exact />
            <Route path="/category" component={Category} exact />
            <Route path="/Signin" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
