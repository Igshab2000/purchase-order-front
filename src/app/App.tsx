import type { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

const tg = (window as any).Telegram.WebApp;

export const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
