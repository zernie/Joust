/// <reference types="react" />
import * as React from "react";
import * as Immutable from "immutable";
import { AssetDirectoryProps, CardDataProps, CardOracleProps, EntityProps, GameStateDescriptorStackProps, HideCardsProps, MulliganOracleProps, OptionCallbackProps, StripBattletagsProps } from "../../interfaces";
import Entity from "../../Entity";
import Option from "../../Option";
import PlayerEntity from "../../Player";
import Choices from "../../Choices";
export interface TwoPlayerGameProps extends EntityProps, CardDataProps, CardOracleProps, MulliganOracleProps, OptionCallbackProps, AssetDirectoryProps, GameStateDescriptorStackProps, HideCardsProps, StripBattletagsProps, React.ClassAttributes<TwoPlayerGame> {
    player1: PlayerEntity;
    player2: PlayerEntity;
    entities: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Entity>>>;
    options: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Option>>>;
    choices: Immutable.Map<number, Choices>;
    endTurnOption?: Option;
}
export default class TwoPlayerGame extends React.Component<TwoPlayerGameProps> {
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: TwoPlayerGameProps, nextState: any): boolean;
}
