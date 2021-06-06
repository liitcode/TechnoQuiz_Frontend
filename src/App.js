import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
