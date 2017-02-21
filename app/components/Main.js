import React from 'react';
import Header from './header/Header';

const Main = ({children, history}) => {
  return (
    <div className="main-container">
    <Header history={history}/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Main