/// <reference types="react" />
import * as React from "react";
import * as Immutable from "immutable";
import { EntityProps, OptionProps } from "../../interfaces";
import Entity from "../../Entity";
import { CardData } from "hearthstonejson-client";
export interface CardProps extends EntityProps, OptionProps, React.ClassAttributes<Card> {
    style?: any;
    isHidden?: boolean;
    defaultStats?: boolean;
    mulligan?: boolean;
    customHealth?: number;
    customAtk?: number;
    customCost?: number;
    setAside?: Immutable.Iterable<number, Entity>;
    creator?: Entity;
}
export default class Card extends React.Component<CardProps> {
    shouldComponentUpdate(nextProps: CardProps, nextState: any): boolean;
    render(): JSX.Element;
    protected formatLanguageRule4(text: string): string;
    protected parseDescription(data: CardData): string;
    private getStatValue(tag, defaultValue);
    private formatJadeGolemText(text);
    private formatKazakusPotionText(text);
}
