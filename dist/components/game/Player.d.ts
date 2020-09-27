/// <reference types="react" />
import * as React from "react";
import PlayerEntity from "../../Player";
import Entity from "../../Entity";
import Option from "../../Option";
import ChoiceList from "../../Choices";
import * as Immutable from "immutable";
import { AssetDirectoryProps, CardArtDirectory, CardDataProps, CardOracleProps, GameStateDescriptorStackProps, HideCardsProps, MulliganOracleProps, OptionCallbackProps, StripBattletagsProps } from "../../interfaces";
import Game from "../../Game";
export interface PlayerProps extends OptionCallbackProps, CardDataProps, CardOracleProps, MulliganOracleProps, AssetDirectoryProps, CardArtDirectory, GameStateDescriptorStackProps, HideCardsProps, StripBattletagsProps, React.ClassAttributes<Player> {
    player: PlayerEntity;
    game: Game;
    entities: Immutable.Map<number, Immutable.Map<number, Entity>>;
    options: Immutable.Map<number, Immutable.Map<number, Option>>;
    choices: ChoiceList;
    isTop: boolean;
    isCurrent: boolean;
}
export default class Player extends React.Component<PlayerProps> {
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: PlayerProps, nextState: any): boolean;
    private cleanPlayerName();
}
