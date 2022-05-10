import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import MyRoutes from './myRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <MyRoutes />
  </React.StrictMode>
);

//basic React Router page root