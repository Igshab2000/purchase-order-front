import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from 'data-provider';
import { App } from './app/App';
import './app/styles/index.scss';

render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
