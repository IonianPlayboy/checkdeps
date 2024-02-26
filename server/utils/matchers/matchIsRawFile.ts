import { matchIsObjectWithKeyAndValue } from "./matchIsObjectWithKeyAndValue";
import { matchIsObjectWithKey } from "./matchIsObjectWithKey";

export type RawFile = {
	type: "file";
	content: string;
	encoding: "base64";
};

export const matchIsRawFile = (file: unknown): file is RawFile =>
	matchIsObjectWithKeyAndValue(file, "type", "file") &&
	matchIsObjectWithKeyAndValue(file, "encoding", "base64") &&
	matchIsObjectWithKey(file, "content") &&
	typeof file.content === "string";
