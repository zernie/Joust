/// <reference types="node" />
import GameState from "./GameState";
import * as Stream from "stream";
import GameStateTrackerPlugin from "./GameStateTrackerPlugin";
export default class GameStateTracker extends Stream.Transform {
    gameState: GameState;
    plugins: GameStateTrackerPlugin[];
    constructor(initialGameState?: GameState, opts?: Stream.TransformOptions);
    registerPlugin(plugin: GameStateTrackerPlugin): void;
    _transform(mutator: any, encoding: string, callback: Function): void;
}
