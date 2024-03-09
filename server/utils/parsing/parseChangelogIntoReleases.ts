export const parseChangelogIntoReleases = (changelog: string) =>
	changelog
		.replaceAll(
			/([^#])(#{1,3}[^\S\r\n]+[^\r\n]*\d+\.\d+\.\d+[^\r\n]*\s)/g,
			"$1<SEPARATE_HERE>$2",
		)
		// NOTE: this is a special case for eslint changelog pattern
		.replaceAll(
			/(v\d+\.\d+\.\d+[^ ]* - [^ ]+ \d{1,2}, \d{4}\s)/g,
			"<SEPARATE_HERE>$1",
		)
		.split("<SEPARATE_HERE>")
		.filter((el) => el.trim().length > 0)
		.map((el, i, array) => {
			const [firstLine] = el.split("\n");
			// NOTE: semver regex source: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
			const [version] =
				firstLine.match(
					/((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)/,
				) ?? [];
			const result = {
				id: array.length - i,
				tag_name: version ?? firstLine,
				name: firstLine,
				// NOTE: Need to escape double curly braces here to avoid parsing it as dynamic content
				// Reference to Nuxt Content doc: https://content.nuxt.com/usage/markdown#binding-data-in-markdown
				body: el.replace("{{}}", "\\{\\{\\}\\}"),
			};
			return result as Omit<typeof result, "name" | "body"> & {
				name: string | null;
				body?: string | null;
			};
		});
