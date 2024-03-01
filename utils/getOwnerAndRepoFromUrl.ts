export const getOwnerAndRepoFromUrl = (url?: string) => {
	// NOTE: reference for using named capturing groups with match
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#using_named_capturing_groups
	const { owner, repo } =
		url?.match(/github.com\/(?<owner>.+)\/(?<repo>.+)\.git/)?.groups ?? {};

	return { owner, repo };
};
