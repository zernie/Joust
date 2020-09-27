/// <reference types="react" />
import * as React from "react";
import * as Immutable from "immutable";
import Entity from "../../../Entity";
import { EntityProps } from "../../../interfaces";
export interface HeroArtProps extends EntityProps {
    secrets: Immutable.Map<number, Entity>;
}
export default class HeroArt extends React.Component<HeroArtProps> {
    shouldComponentUpdate(nextProps: HeroArtProps, nextState: {}, nextContext: any): boolean;
    render(): JSX.Element;
}
