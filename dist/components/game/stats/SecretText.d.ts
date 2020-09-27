/// <reference types="react" />
import * as React from "react";
export interface SecretTextProps extends React.ClassAttributes<SecretText> {
    text: string;
    title?: string;
}
export default class SecretText extends React.Component<SecretTextProps> {
    render(): JSX.Element;
}
