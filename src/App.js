import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import Contact from './components/Contact/Contact'
import FullProject from './containers/Projects/FullProject/FullProject'
import ListProjects from './containers/Projects/ListProjects/ListProjects';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/blog' exact component={Blog} />
              <Route path='/projects' exact component={ListProjects} />        
              <Route path='/contact' exact component={Contact} />
              <Route path='/projects/:id' exact component={FullProject} />
            </Switch>
          </Layout>
        </BrowserRouter>     
      </div>
    );
  }
}

export default App;
