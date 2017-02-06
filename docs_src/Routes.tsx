import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageRoot from './PageRoot';
import IndexPage from './pages/IndexPage';
import ParentablePage from './pages/ParentablePage';
import StageDemoPage from './pages/StageDemoPage';

export default (
  <Route path="/" component={PageRoot}>
    <IndexRoute component={IndexPage} />
    <Route path="parentable" component={ParentablePage} />
    <Route path="parentable/" component={ParentablePage} />
    <Route path="stage-demo" component={StageDemoPage} />
    <Route path="stage-demo/" component={StageDemoPage} />
  </Route>
);