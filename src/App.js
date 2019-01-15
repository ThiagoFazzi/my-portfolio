import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import Project from './containers/Project/Project'
import Contact from './components/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/project' exact component={Project} />        
            <Route path='/contact' exact component={Contact} />  
          </Layout>
        </BrowserRouter>     
      </div>
    );
  }
}

export default App;
