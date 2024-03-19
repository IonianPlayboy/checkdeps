import { describe, it } from "vitest";

import { getOwnerAndRepoForDependency } from "@/utils/repository/getRepositoryParamsForDependency";

type DependencyParameter = Parameters<typeof getOwnerAndRepoForDependency>[0];

describe("getOwnerAndRepoForDependency", () => {
	it("should return the correct owner and repo from a valid repository URL", ({
		expect,
	}) => {
		const dependency: DependencyParameter = {
			repository: { url: "https://github.com/owner/repo.git" },
			bugs: { url: "https://github.com/owner/repo/issues" },
		};
		const result = getOwnerAndRepoForDependency(dependency);
		expect(result).toEqual({ owner: "owner", repo: "repo" });
	});

	it("should return the correct owner and repo from a valid bugs URL when repository URL is not present", ({
		expect,
	}) => {
		const dependency: DependencyParameter = {
			repository: undefined,
			bugs: { url: "https://github.com/owner/repo/issues" },
		};
		const result = getOwnerAndRepoForDependency(dependency);
		expect(result).toEqual({ owner: "owner", repo: "repo" });
	});

	it("should return an empty object when neither repository URL nor bugs URL is present", ({
		expect,
	}) => {
		const dependency: DependencyParameter = {
			repository: undefined,
			bugs: undefined,
		};
		const result = getOwnerAndRepoForDependency(dependency);
		expect(result).toEqual({});
	});
	it("should return an empty object when repository URL is invalid", ({
		expect,
	}) => {
		const dependency: DependencyParameter = {
			repository: { url: "https://random-website.com" },
			bugs: undefined,
		};
		const result = getOwnerAndRepoForDependency(dependency);
		expect(result).toEqual({});
	});
	it("should return an empty object when bugs URL is invalid", ({
		expect,
	}) => {
		const dependency: DependencyParameter = {
			repository: undefined,
			bugs: { url: "https://random-website.com" },
		};
		const result = getOwnerAndRepoForDependency(dependency);
		expect(result).toEqual({});
	});
});
