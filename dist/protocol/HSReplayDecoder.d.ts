/// <reference types="node" />
import * as Stream from "stream";
import * as Immutable from "immutable";
import { CardOracle, MulliganOracle } from "../interfaces";
export default class HSReplayDecoder extends Stream.Transform implements CardOracle, MulliganOracle {
    private sax;
    private gameId;
    private gameType;
    private currentGame;
    private nodeStack;
    private timeOffset;
    private cardIds;
    private mulligans;
    private playerMap;
    private choiceMap;
    version: string;
    build: number;
    debug: boolean;
    constructor(opts?: Stream.TransformOptions);
    _transform(chunk: any, encoding: string, callback: Function): void;
    protected parseTimestamp(timestamp: string): number;
    private onOpenTag(node);
    private onCloseTag(name);
    protected resolveEntityId(id: number | string): number;
    protected revealEntity(id: number, cardId: string, tags?: Immutable.Map<string, number>): void;
    getCardMap(): Immutable.Map<number, string>;
    getMulligans(): Immutable.Map<number, boolean>;
}
