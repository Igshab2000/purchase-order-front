import { lazy, type FC, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

const tg = (window as any).Telegram.WebApp;

const FirstStep = lazy(() => import('../pages/first-step/FirstStep'));
const SecondStep = lazy(() => import('../pages/second-step/SecondStep'));
const ThirdStep = lazy(() => import('../pages/third-step/ThirdStep'));

export const App: FC = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstStep} />
          <Route exact path="/second" component={SecondStep} />
          <Route exact path="/third" component={ThirdStep} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
