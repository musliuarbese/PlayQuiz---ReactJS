import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Fakulteti from './containers/Fakulteti/Fakulteti';
import Layout from './components/Layout/Layout';
import Courses from './containers/Fakulteti/SHKI/Courses/Courses';
import QuizForm from './containers/Fakulteti/SHKI/Courses/DizajnimiSoftuerit/QuizForm/QuizForm';
import QuizJava from './containers/Fakulteti/SHKI/Courses/JavaOOP/QuizJava/QuizJava';
import Auth from './containers/Authenticated/Auth';

class App extends Component {
  render() {
    return (
    <Layout>
        <Header />
        <Route path="/" exact component={Fakulteti} />
        <Route path="/courses"  component={Courses} />
        <Route path="/quizform" component={QuizForm} />
        <Route path="/quizjava"  component={QuizJava} />
        <Route path="/auth"  component={Auth} />
    </Layout>
    );
  }
}

export default withRouter(App);
