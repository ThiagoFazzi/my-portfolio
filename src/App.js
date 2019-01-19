import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import Projects from './containers/Projects/Projects'
import Contact from './components/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/projects' exact component={Projects} />        
            <Route path='/contact' exact component={Contact} />  
          </Layout>
        </BrowserRouter>     
      </div>
    );
  }
}

export default App;
