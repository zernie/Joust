/// <reference types="react" />
import * as React from "react";
import { AssetDirectoryProps, CardArtDirectory } from "../../../interfaces";
export interface CardArtItem {
    image: string;
    isArt?: boolean;
    classes: Array<String>;
}
export interface CardArtProps extends AssetDirectoryProps, CardArtDirectory, React.ClassAttributes<CardArt> {
    layers: Array<CardArtItem>;
    scale: number;
    square: boolean;
    margin: boolean;
}
export interface CardArtState {
    height?: number;
}
declare class CardArt extends React.Component<CardArtProps, CardArtState> {
    constructor(props: CardArtProps, context?: any);
    private onResize;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: CardArtProps, prevState: CardArtState, prevContext: any): void;
    shouldComponentUpdate(nextProps: CardArtProps, nextState: CardArtState): boolean;
    private static imageDirectory;
    private createStyle();
    private createImageItem(item, index);
    private ref;
    protected updateRef(ref: HTMLDivElement): void;
    private request;
    protected measureHeight(): void;
    render(): JSX.Element;
}
export default CardArt;
