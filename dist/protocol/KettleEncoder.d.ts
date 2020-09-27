/// <reference types="node" />
import * as Stream from "stream";
import { InteractiveBackend } from "../interfaces";
import Option from "../Option";
import Entity from "../Entity";
import GameStateTracker from "../state/GameStateTracker";
export default class KettleEncoder extends Stream.Readable implements InteractiveBackend {
    private tracker;
    private gameStarted;
    constructor(tracker?: GameStateTracker, opts?: Stream.ReadableOptions);
    startGame(): void;
    exitGame(): void;
    sendOption(option: Option, target?: number, position?: number): void;
    chooseEntities(entities: Entity[]): void;
    _read(size: number): void;
    protected queueMessage(payload: any): void;
}
