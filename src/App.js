/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styles from './App.module.scss';
import Home from './components/LandingPage';
import Login from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Category from './components/Category';
import Quiz from './components/Quiz';
import Navbar from './components/UI/NavBar'
import Footer from './components/UI/Footer';
import { clearMessage } from './Redux/actions/actionCreators/message';

function App() {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); 
    });
  }, [dispatch]);

  return (
    <Router history = {history}>
      <Navbar/>
      <div className={styles.app}>
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/quiz" component={Quiz} exact />
            <Route path="/category" component={Category} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        <Footer />  
        </main>
      </div>
    </Router>
  );
}

export default App;
