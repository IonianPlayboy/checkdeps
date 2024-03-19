import { describe, it } from "vitest";
import { simplePackageJson } from "@/tests/fixtures/packageJsons/simple";
import {
	simpleNpmLockfile,
	simplePnpmLockfile,
	simpleYarnLockfile,
} from "@/tests/fixtures/lockfiles";

import { getVersionsPerDependency } from "@/utils/version/getVersionsPerDependency";

describe("getVersionsPerDependency", () => {
	it("should return the correct versions for all dependencies with npm lockfile", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: simplePackageJson,
			lockfileData: simpleNpmLockfile,
			lockfileUrl: "package-lock.json",
		});
		expect(Object.entries(versions).length).toBe(3);
		expect(versions["vite"]).toEqual({
			lockfileVersion: "5.1.6",
			semver: "^5.1.6",
			dependencyName: "vite",
		});
		expect(versions["vitest"]).toEqual({
			lockfileVersion: "1.3.1",
			semver: "latest",
			dependencyName: "vitest",
		});
		expect(versions["@vitest/ui"]).toEqual({
			lockfileVersion: "1.3.0",
			semver: "1.3.0",
			dependencyName: "@vitest/ui",
		});
	});
	it("should return the correct versions for all dependencies with pnpm lockfile", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: simplePackageJson,
			lockfileData: simplePnpmLockfile,
			lockfileUrl: "pnpm-lock.yaml",
		});
		expect(Object.entries(versions).length).toBe(3);
		expect(versions["vite"]).toEqual({
			lockfileVersion: "5.1.6",
			semver: "^5.1.6",
			dependencyName: "vite",
		});
		expect(versions["vitest"]).toEqual({
			lockfileVersion: "1.3.1",
			semver: "latest",
			dependencyName: "vitest",
		});
		expect(versions["@vitest/ui"]).toEqual({
			lockfileVersion: "1.3.0",
			semver: "1.3.0",
			dependencyName: "@vitest/ui",
		});
	});
	it("should return the correct versions for all dependencies with yarn lockfile", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: simplePackageJson,
			lockfileData: simpleYarnLockfile,
			lockfileUrl: "yarn.lock",
		});
		expect(Object.entries(versions).length).toBe(3);
		expect(versions["vite"]).toEqual({
			lockfileVersion: "5.1.6",
			semver: "^5.1.6",
			dependencyName: "vite",
		});
		expect(versions["vitest"]).toEqual({
			lockfileVersion: "1.3.1",
			semver: "latest",
			dependencyName: "vitest",
		});
		expect(versions["@vitest/ui"]).toEqual({
			lockfileVersion: "1.3.0",
			semver: "1.3.0",
			dependencyName: "@vitest/ui",
		});
	});

	it("should return an empty object when no dependencies are present", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: undefined,
			lockfileData: simpleYarnLockfile,
			lockfileUrl: "yarn.lock",
		});
		expect(versions).toEqual({});
	});

	it("should return a version record with undefined lockfile versions when no lockfile data is present", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: simplePackageJson,
			lockfileData: undefined,
			lockfileUrl: "yarn.lock",
		});
		expect(Object.entries(versions).length).toBe(3);
		expect(versions["vite"]).toEqual({
			lockfileVersion: undefined,
			semver: "^5.1.6",
			dependencyName: "vite",
		});
		expect(versions["vitest"]).toEqual({
			lockfileVersion: undefined,
			semver: "latest",
			dependencyName: "vitest",
		});
		expect(versions["@vitest/ui"]).toEqual({
			lockfileVersion: undefined,
			semver: "1.3.0",
			dependencyName: "@vitest/ui",
		});
	});

	it("should return a version record with undefined lockfile versions when no lockfile url is present", ({
		expect,
	}) => {
		const versions = getVersionsPerDependency({
			packageJson: simplePackageJson,
			lockfileData: simpleYarnLockfile,
			lockfileUrl: undefined,
		});
		expect(Object.entries(versions).length).toBe(3);
		expect(versions["vite"]).toEqual({
			lockfileVersion: undefined,
			semver: "^5.1.6",
			dependencyName: "vite",
		});
		expect(versions["vitest"]).toEqual({
			lockfileVersion: undefined,
			semver: "latest",
			dependencyName: "vitest",
		});
		expect(versions["@vitest/ui"]).toEqual({
			lockfileVersion: undefined,
			semver: "1.3.0",
			dependencyName: "@vitest/ui",
		});
	});
});
