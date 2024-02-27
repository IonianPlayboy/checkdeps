import type { PackageJson } from "type-fest";

export type RemoteFileType = "json" | "text";

export type GetRemoteFileParams<T extends RemoteFileType> = {
	url: string;
	type: T;
};

type FetchResponse<T extends RemoteFileType> = T extends "text"
	? RawFile | string
	: PackageJson | RawFile | string;

const handleTextResponse = (response: FetchResponse<"text">) =>
	matchIsRawFile(response)
		? parseRawFileContent(response)
		: parseStringPayload(response);

const handleJsonResponse = (response: FetchResponse<"json">) => {
	if (typeof response === "string")
		return parseTextIntoJson<PackageJson>(parseStringPayload(response));
	if (matchIsRawFile(response))
		return parseTextIntoJson<PackageJson>(parseRawFileContent(response));
	return response;
};

export type RemoteFileContent<T extends RemoteFileType> = T extends "text"
	? ReturnType<typeof handleTextResponse>
	: ReturnType<typeof handleJsonResponse>;

export const getRemoteFileContent = defineCachedFunction(
	async <T extends RemoteFileType>({
		url,
		type,
	}: GetRemoteFileParams<T>): Promise<RemoteFileContent<T>> => {
		if (!url) return Promise.reject("No url provided");

		const response = await $fetch<FetchResponse<T>>(url);

		// // TODO: weird issue with the response type if not using the type assertion
		return type === "text"
			? (handleTextResponse(
					response as FetchResponse<"text">,
				) as RemoteFileContent<T>)
			: (handleJsonResponse(response) as RemoteFileContent<T>);
	},
	{
		maxAge: 60 * 60,
		name: "RemoteFileContent",
		getKey: ({ url }) => url,
	},
);
