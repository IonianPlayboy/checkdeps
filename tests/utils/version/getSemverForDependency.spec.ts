import { describe, it } from "vitest";
import { simplePackageJson } from "@/tests/fixtures/packageJsons/simple";

import { getSemverForDependency } from "@/utils/version/getSemverForDependency";

describe("getSemverForDependency", () => {
	it("should return the correct semver when the dependency is present in the dependencies", ({
		expect,
	}) => {
		expect(
			getSemverForDependency({
				packageJson: simplePackageJson,
				dependencyName: "vite",
			}),
		).toBe("^5.1.6");
	});

	it("should return the correct semver when the dependency is present in the devDependencies", ({
		expect,
	}) => {
		expect(
			getSemverForDependency({
				packageJson: simplePackageJson,
				dependencyName: "@vitest/ui",
			}),
		).toBe("1.3.0");
		expect(
			getSemverForDependency({
				packageJson: simplePackageJson,
				dependencyName: "vitest",
			}),
		).toBe("latest");
	});

	it("should return undefined when the dependency is not present in the package.json", ({
		expect,
	}) => {
		expect(
			getSemverForDependency({
				packageJson: simplePackageJson,
				dependencyName: "nonexistent-package",
			}),
		).toBeUndefined();
	});

	it("should return undefined when dependencyName is not provided", ({
		expect,
	}) => {
		expect(
			getSemverForDependency({ packageJson: simplePackageJson }),
		).toBeUndefined();
	});
});
