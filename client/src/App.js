import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Library from './pages/Library';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/books/list" exact component={Library} />
            <Route path="/books/create" exact component={AddBook} />
            <Route path="/books/update/:id" exact component={EditBook} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
