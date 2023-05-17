  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import Header from './components/header';
  import Body from './components/body';




  const a = <div>
              <Header></Header>
              <Body></Body>
              </div>
            
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
  a
  );

