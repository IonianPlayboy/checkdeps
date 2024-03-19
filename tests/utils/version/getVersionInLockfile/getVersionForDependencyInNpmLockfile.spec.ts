import { describe, it } from "vitest";
import { simpleNpmLockfile } from "@/tests/fixtures/lockfiles/npm/simple";

import { getVersionForDependencyInNpmLockfile } from "@/utils/version/getVersionInLockfile/getVersionForDependencyInNpmLockfile";

describe("getVersionForDependencyInNpmLockfile", () => {
	it("should return the correct version when the dependency is present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInNpmLockfile({
				dependencyName: "vite",
				lockfileData: simpleNpmLockfile,
			}),
		).toBe("5.1.6");
		expect(
			getVersionForDependencyInNpmLockfile({
				dependencyName: "vitest",
				lockfileData: simpleNpmLockfile,
			}),
		).toBe("1.3.1");
		expect(
			getVersionForDependencyInNpmLockfile({
				dependencyName: "@vitest/ui",
				lockfileData: simpleNpmLockfile,
			}),
		).toBe("1.3.0");
	});

	it("should return undefined when the dependency is not present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInNpmLockfile({
				dependencyName: "nonexistent-package",
				lockfileData: simpleNpmLockfile,
			}),
		).toBeUndefined();
	});

	it("should return undefined when lockfileData is not provided", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInNpmLockfile({
				dependencyName: "vite",
			}),
		).toBeUndefined();
	});
});
