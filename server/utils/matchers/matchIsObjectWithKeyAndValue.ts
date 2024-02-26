export type ObjectWithKeyAndValue<K extends string, V extends unknown> = {
	[key in K]: V;
};

export const matchIsObjectWithKeyAndValue = <
	K extends string,
	const V extends unknown,
>(
	input: unknown,
	key: K,
	value: V,
): input is ObjectWithKeyAndValue<K, V> =>
	!!input &&
	typeof input === "object" &&
	key in input &&
	input[key as keyof typeof input] === value;
