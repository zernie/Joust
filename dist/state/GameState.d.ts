import Entity from "../Entity";
import Option from "../Option";
import GameStateMutator from "./GameStateMutator";
import * as Immutable from "immutable";
import Choices from "../Choices";
import Player from "../Player";
import GameStateDescriptor from "./GameStateDescriptor";
import { GameStateDiff } from "../interfaces";
import Game from "../Game";
export default class GameState {
    protected _entities: Immutable.Map<number, Entity>;
    protected _entityTree: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Entity>>>;
    protected _options: Immutable.Map<number, Option>;
    protected _optionTree: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Option>>>;
    protected _time: number;
    protected _choices: Immutable.Map<number, Choices>;
    protected _descriptors: Immutable.Stack<GameStateDescriptor>;
    protected _diffs: Immutable.Set<GameStateDiff>;
    private _cachedGameKey;
    constructor(_entities?: Immutable.Map<number, Entity>, _entityTree?: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Entity>>>, _options?: Immutable.Map<number, Option>, _optionTree?: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Option>>>, _time?: number, _choices?: Immutable.Map<number, Choices>, _descriptors?: Immutable.Stack<GameStateDescriptor>, _diffs?: Immutable.Set<GameStateDiff>);
    getEntity(id: number): Entity;
    readonly entities: Immutable.Map<number, Entity>;
    readonly entityTree: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Entity>>>;
    readonly game: Game;
    getPlayer(playerId: number): Player;
    getPlayers(): Player[];
    getPlayerCount(): number;
    readonly options: Immutable.Map<number, Option>;
    readonly optionTree: Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Option>>>;
    readonly time: number;
    readonly choices: Immutable.Map<number, Choices>;
    readonly descriptor: GameStateDescriptor;
    readonly descriptors: Immutable.Stack<GameStateDescriptor>;
    readonly diffs: Immutable.Set<GameStateDiff>;
    apply(mutator: GameStateMutator): GameState;
}