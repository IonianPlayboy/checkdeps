import { describe, it } from "vitest";
import { simpleYarnLockfile } from "@/tests/fixtures/lockfiles/yarn/simple";

import { getVersionForDependencyInYarnLockfile } from "@/utils/version/getVersionInLockfile/getVersionForDependencyInYarnLockfile";

describe("getVersionForDependencyInYarnLockfile", () => {
	it("should return the correct version when the dependency is present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInYarnLockfile({
				dependencyName: "vite",
				lockfileData: simpleYarnLockfile,
			}),
		).toBe("5.1.6");
		expect(
			getVersionForDependencyInYarnLockfile({
				dependencyName: "vitest",
				lockfileData: simpleYarnLockfile,
			}),
		).toBe("1.3.1");
		expect(
			getVersionForDependencyInYarnLockfile({
				dependencyName: "@vitest/ui",
				lockfileData: simpleYarnLockfile,
			}),
		).toBe("1.3.0");
	});

	it("should return undefined when the dependency is not present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInYarnLockfile({
				dependencyName: "nonexistent-package",
				lockfileData: simpleYarnLockfile,
			}),
		).toBeUndefined();
	});

	it("should return undefined when lockfileData is not provided", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInYarnLockfile({
				dependencyName: "vite",
			}),
		).toBeUndefined();
	});
});
