import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from 'data-provider';
import { App } from './app/App';
import './app/styles/index.scss';

render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <DataProvider>
        <App />
      </DataProvider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
