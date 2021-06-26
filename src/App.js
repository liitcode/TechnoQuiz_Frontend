import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styles from './App.module.scss';
import Home from './components/LandingPage';
import Login from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Category from './components/Category';
import QuizSolution from './components/QuizSolution';
import Quiz from './components/Quiz';
import Navbar from './components/UI/NavBar';
import Footer from './components/UI/Footer';
import Premium from './components/Premium';
import { clearMessage } from './Redux/actions/actionCreators/message';
import PageNotFound from './components/Shared/PageNotFound';

function App() {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen(() => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <Navbar />
      <div className={styles.app}>
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/quiz" component={Quiz} exact />
            <Route path="/category" component={Category} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/premium" component={Premium} exact />
            <Route path="/quizsolution" component={QuizSolution} exact />
            <Route path="/" component={PageNotFound} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
