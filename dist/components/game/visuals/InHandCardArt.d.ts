/// <reference types="react" />
import * as React from "react";
import { EntityProps } from "../../../interfaces";
export interface InHandCardArtProps extends EntityProps, React.ClassAttributes<InHandCardArt> {
    hidden: boolean;
    cardType?: number;
    cardClass?: number;
    mulligan?: boolean;
}
export default class InHandCardArt extends React.Component<InHandCardArtProps> {
    render(): JSX.Element;
    private cardClassToString();
}
