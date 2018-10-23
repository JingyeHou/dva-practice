import React from 'react';
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import * as R from 'ramda';
import dynamic from 'dva/dynamic'
import PropTypes from 'prop-types'

const { ConnectedRouter } = routerRedux

const Routers = ({ history, app }) => {
  const routes = [
    {
      path: '/',
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/count',
      models: () => [import('./models/count')],
      component: () => import('./routes/CountApp') 
    },
    {
      path: '/product',
      models: () => [import('./models/Products/products')],
      component: () => import('./routes/Products/Products')
    },
    {
      path: '/users',
      models: () => [import('./models/Users/user')],
      component: () => import('./routes/Users')
    },
  ]
  return (
    <ConnectedRouter history={history}>
      <Switch>
      {
        R.map(({ path, ...dynamics }, key) => (
          <Route 
            key={key} 
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ), routes)
      }
      </Switch>
    </ConnectedRouter>
  );
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
