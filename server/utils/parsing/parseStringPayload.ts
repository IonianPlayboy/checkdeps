import { parseBlobWithRawLines } from "./parseBlobWithRawLines";

export const parseStringPayload = (payload: string) => {
	try {
		const parsedObject = JSON.parse(payload) as unknown;
		return matchIsBlobWithRawLines(parsedObject)
			? parseBlobWithRawLines(parsedObject)
			: payload;
	} catch (error) {
		return payload;
	}
};
