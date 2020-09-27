/// <reference types="node" />
import * as Stream from "stream";
export default class KettleDecoder extends Stream.Transform {
    private buffer;
    private ready;
    private draining;
    constructor(opts?: Stream.TransformOptions);
    _write(chunk: number[], encoding: string, callback: Function): void;
    private drainBuffer();
    _read(size: number): void;
    private handlePacket(packet);
}
