import { describe, it, vi, afterEach } from "vitest";
import {
	simpleNpmLockfile,
	simplePnpmLockfile,
	simpleYarnLockfile,
} from "@/tests/fixtures/lockfiles";
import * as NpmLockfileUtil from "@/utils/version/getVersionInLockfile/getVersionForDependencyInNpmLockfile";
import * as PnpmLockfileUtil from "@/utils/version/getVersionInLockfile/getVersionForDependencyInPnpmLockfile";
import * as YarnLockfileUtil from "@/utils/version/getVersionInLockfile/getVersionForDependencyInYarnLockfile";

import { getLockfileVersionForDependency } from "@/utils/version/getLockfileVersionForDependency";

describe("getLockfileVersionForDependency", () => {
	const spiedNpmUtil = vi.spyOn(
		NpmLockfileUtil,
		"getVersionForDependencyInNpmLockfile",
	);
	const spiedPnpmUtil = vi.spyOn(
		PnpmLockfileUtil,
		"getVersionForDependencyInPnpmLockfile",
	);
	const spiedYarnUtil = vi.spyOn(
		YarnLockfileUtil,
		"getVersionForDependencyInYarnLockfile",
	);

	const allSpiedUtils = [spiedNpmUtil, spiedPnpmUtil, spiedYarnUtil];

	afterEach(() => {
		vi.resetAllMocks();
	});

	it("should return the correct version when the lockfile is a yarn.lock", ({
		expect,
	}) => {
		const lockfileData = simpleYarnLockfile;
		const expectedCalledUtil = spiedYarnUtil;

		const otherSpiedUtils = allSpiedUtils.filter(
			(util) => util !== expectedCalledUtil,
		);

		getLockfileVersionForDependency({
			dependencyName: "vite",
			lockfileData,
			lockfileUrl: "yarn.lock",
		});

		expect(expectedCalledUtil).toHaveBeenCalledWith({
			dependencyName: "vite",
			lockfileData,
		});
		otherSpiedUtils.forEach((util) => {
			expect(util).not.toHaveBeenCalled();
		});
	});

	it("should return the correct version when the lockfile is a pnpm-lock.yaml", ({
		expect,
	}) => {
		const lockfileData = simplePnpmLockfile;
		const expectedCalledUtil = spiedPnpmUtil;

		const otherSpiedUtils = allSpiedUtils.filter(
			(util) => util !== expectedCalledUtil,
		);

		getLockfileVersionForDependency({
			dependencyName: "vite",
			lockfileData,
			lockfileUrl: "pnpm-lock.yaml",
		});

		expect(expectedCalledUtil).toHaveBeenCalledWith({
			dependencyName: "vite",
			lockfileData,
		});
		otherSpiedUtils.forEach((util) => {
			expect(util).not.toHaveBeenCalled();
		});
	});

	it("should return the correct version when the lockfile is a package-lock.json", ({
		expect,
	}) => {
		const lockfileData = simpleNpmLockfile;
		const expectedCalledUtil = spiedNpmUtil;

		const otherSpiedUtils = allSpiedUtils.filter(
			(util) => util !== expectedCalledUtil,
		);

		getLockfileVersionForDependency({
			dependencyName: "vite",
			lockfileData,
			lockfileUrl: "package-lock.json",
		});

		expect(expectedCalledUtil).toHaveBeenCalledWith({
			dependencyName: "vite",
			lockfileData,
		});
		otherSpiedUtils.forEach((util) => {
			expect(util).not.toHaveBeenCalled();
		});
	});

	it("should return undefined when the lockfile is not recognized", ({
		expect,
	}) => {
		const lockfileData =
			"# This is a lockfile that is not recognized by the function";

		const result = getLockfileVersionForDependency({
			dependencyName: "vite",
			lockfileData,
			lockfileUrl: "not-recognized.lock",
		});

		allSpiedUtils.forEach((util) => {
			expect(util).not.toHaveBeenCalled();
		});
		expect(result).toBeUndefined();
	});
});
