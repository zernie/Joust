/// <reference types="react" />
import * as React from "react";
export interface LoadingScreenProps extends React.ClassAttributes<LoadingScreen> {
    players?: string[];
}
export default class LoadingScreen extends React.Component<LoadingScreenProps> {
    private messages;
    render(): JSX.Element;
}
