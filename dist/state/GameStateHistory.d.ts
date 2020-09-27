import GameState from "./GameState";
import * as Immutable from "immutable";
import { HistoryEntry } from "../interfaces";
export default class GameStateHistory {
    tail: HistoryEntry;
    head: HistoryEntry;
    pointer: HistoryEntry;
    turnMap: Immutable.Map<number, GameState>;
    push(gameState: GameState): void;
    getLatest(time: number): GameState;
}
