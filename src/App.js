import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Category from './components/Category';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/category" component={Category} exact />
            <Route path="/Signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
