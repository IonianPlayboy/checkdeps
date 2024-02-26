export const parseBlobWithRawLines = (blobPayload: BlobPayloadWithRawLines) =>
	blobPayload.payload.blob.rawLines.join("\n");
