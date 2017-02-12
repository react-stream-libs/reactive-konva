import * as React from 'react';
import { Route } from 'react-router';
import AggregateComponentExamplePage from './AggregateComponent';
import FillsExamplePage from './Fills';

export function getExamplesRoutes(baseUrl: string) {
  return (
    <Route path={baseUrl}>
      <Route path="aggregates" component={AggregateComponentExamplePage} />
      <Route path="aggregates/" component={AggregateComponentExamplePage} />
      <Route path="fills" component={FillsExamplePage} />
      <Route path="fills/" component={FillsExamplePage} />
    </Route>
  )
}