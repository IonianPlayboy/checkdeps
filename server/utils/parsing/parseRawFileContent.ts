export const parseRawFileContent = (file: RawFile) =>
	Buffer.from(file.content, "base64").toString("utf-8");
