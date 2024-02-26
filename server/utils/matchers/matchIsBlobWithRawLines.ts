import { matchIsObjectWithKey } from "./matchIsObjectWithKey";

export type BlobPayloadWithRawLines = {
	payload: {
		blob: {
			rawLines: string[];
		};
	};
};

export const matchIsBlobWithRawLines = (
	blobPayload: unknown,
): blobPayload is BlobPayloadWithRawLines =>
	matchIsObjectWithKey(blobPayload, "payload") &&
	matchIsObjectWithKey(blobPayload.payload, "blob") &&
	matchIsObjectWithKey(blobPayload.payload.blob, "rawLines") &&
	Array.isArray(blobPayload.payload.blob.rawLines) &&
	blobPayload.payload.blob.rawLines.every(
		(line): line is string => typeof line === "string",
	);
