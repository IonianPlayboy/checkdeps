import { describe, it } from "vitest";
import { simplePnpmLockfile } from "@/tests/fixtures/lockfiles/pnpm/simple";

import { getVersionForDependencyInPnpmLockfile } from "@/utils/version/getVersionInLockfile/getVersionForDependencyInPnpmLockfile";

describe("getVersionForDependencyInPnpmLockfile", () => {
	it("should return the correct version when the dependency is present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInPnpmLockfile({
				dependencyName: "vite",
				lockfileData: simplePnpmLockfile,
			}),
		).toBe("5.1.6");
		expect(
			getVersionForDependencyInPnpmLockfile({
				dependencyName: "vitest",
				lockfileData: simplePnpmLockfile,
			}),
		).toBe("1.3.1");
		expect(
			getVersionForDependencyInPnpmLockfile({
				dependencyName: "@vitest/ui",
				lockfileData: simplePnpmLockfile,
			}),
		).toBe("1.3.0");
	});

	it("should return undefined when the dependency is not present in the lockfile", ({
		expect,
	}) => {
		expect(
			getVersionForDependencyInPnpmLockfile({
				dependencyName: "nonexistent-package",
				lockfileData: simplePnpmLockfile,
			}),
		).toBeUndefined();
	});
	it("should return undefined when the lockfile is empty", ({ expect }) => {
		expect(
			getVersionForDependencyInPnpmLockfile({
				dependencyName: "vite",
				lockfileData: "",
			}),
		).toBeUndefined();
	});
});
