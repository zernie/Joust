/// <reference types="react" />
import * as React from "react";
import { EntityProps } from "../../../interfaces";
export default class InPlayCardArt extends React.Component<EntityProps> {
    shouldComponentUpdate(nextProps: EntityProps): boolean;
    render(): JSX.Element;
}
