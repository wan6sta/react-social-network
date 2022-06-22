import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = () => {
  console.log('перерисовка')
  root.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  );
}

render();

store.subscribe(render);
