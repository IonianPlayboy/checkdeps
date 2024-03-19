import { describe, it } from "vitest";

import { getOwnerAndRepoFromUrl } from "@/utils/repository/getOwnerAndRepoFromUrl";

describe("getOwnerAndRepoFromUrl", () => {
	it("should return the correct owner and repo from a valid GitHub git URL", ({
		expect,
	}) => {
		const url = "https://github.com/owner/repo.git";
		const result = getOwnerAndRepoFromUrl(url);
		expect(result).toEqual({ owner: "owner", repo: "repo" });
	});

	it("should return the correct owner and repo from a valid GitHub issues URL", ({
		expect,
	}) => {
		const url = "https://github.com/owner/repo/issues";
		const result = getOwnerAndRepoFromUrl(url);
		expect(result).toEqual({ owner: "owner", repo: "repo" });
	});

	it("should return an empty object for an invalid URL", ({ expect }) => {
		const url = "https://random-website.com";
		const result = getOwnerAndRepoFromUrl(url);
		expect(result).toEqual({});
	});

	it("should return an empty object when no URL is provided", ({
		expect,
	}) => {
		const result = getOwnerAndRepoFromUrl();
		expect(result).toEqual({});
	});
});
