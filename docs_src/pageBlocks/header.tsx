import * as React from 'react';
import {
  withRouter,
  InjectedRouter,
} from 'react-router'
import {
  Navbar,
  Nav, NavDropdown, NavItem,
  MenuItem,
} from 'react-bootstrap';


export type PropsType = {
  router?: InjectedRouter,
};
export type StateType = {
  routeTo?: string,
};

@withRouter
export default class Header extends React.Component<PropsType, StateType> {
  constructor () {
    super();
    this.state = {
    };
  }
  handleSelect(routeTo: any) {
    // this.props.router.push(`/reactive-konva/${routeTo}`);
    this.setState({ routeTo });
  }
  render() {
    return (
      <Navbar>
        <Nav bsStyle="tabs" activeKey={this.state.routeTo} onSelect={(key) => this.handleSelect(key)}>
          <NavItem eventKey="reactive-konva" href="/reactive-konva">Reactive-Konva</NavItem>
          <NavDropdown eventKey="4" title="Demos" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey="4" title="Examples" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}