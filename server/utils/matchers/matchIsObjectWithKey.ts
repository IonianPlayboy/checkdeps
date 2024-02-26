export type ObjectWithKey<K extends string> = {
	[key in K]: unknown;
};

export const matchIsObjectWithKey = <K extends string>(
	input: unknown,
	key: K,
): input is ObjectWithKey<K> =>
	!!input && typeof input === "object" && key in input;
