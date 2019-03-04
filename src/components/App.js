import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return(
    <div>
      Page1
      <Link to="/pagetwo">Navigate to page Two</Link>
    </div>
  )
}
const PageTwo = () => {
  return(
    <div>
      Page2
      <button>Click Me!</button>
      <Link to="/">Navigate to page one</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route 
            path='/'
            exact
            component={PageOne}
          />
          <Route 
            path='/pagetwo'
            component={PageTwo}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App
