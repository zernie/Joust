/// <reference types="node" />
import * as Stream from "stream";
export default class GameStateSink extends Stream.Writable {
    constructor();
    _write(chunk: any, encoding: string, callback: Function): void;
}
