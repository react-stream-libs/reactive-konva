/// <reference types="react" />
import * as React from 'react';
import { InjectedRouter } from 'react-router';
export declare type PropsType = {
    router?: InjectedRouter;
};
export declare type StateType = {
    routeTo?: string;
};
export default class Header extends React.Component<PropsType, StateType> {
    constructor();
    handleSelect(routeTo: any): void;
    render(): JSX.Element;
}
