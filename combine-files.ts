import { readdir, readFile, writeFile } from "fs/promises";

let text = `// Generation Time: ${new Date().toISOString()}\n`;
async function runProcess(dir: URL) {
	const d = await readdir(dir, { withFileTypes: true });
	for (const f of d) {
		console.log(f.isDirectory(), new URL(f.name, dir).pathname.replace(new URL(".", import.meta.url).pathname, ""));
		if (f.isDirectory()) await runProcess(new URL(`${f.name}/`, dir));
		else {
			let lookForImport = false;
			// const replacements: Array<[string, string]> = [];
			const txt = (await readFile(new URL(f.name, dir)))
				.toString()
				.split("\n")
				.map((line, index) => {
					if (line.startsWith("type")) console.warn("Unexported Type In %s:%d", new URL(f.name, dir).pathname.replace(new URL(".", import.meta.url).pathname, ""), index + 1);
					if (line.startsWith("interface")) console.warn("Unexported Interface In %s:%d", new URL(f.name, dir).pathname.replace(new URL(".", import.meta.url).pathname, ""), index + 1);
					if (line.startsWith("eslint-disable")) return "[DELETE]";
					/* if (f.name === "global.d.ts") {
						let match: RegExpExecArray | null, rp: [string, string] | undefined;
						console.log(replacements);
						if ((match = /([a-z\d]+) as ([a-z\d]+)/i.exec(line))) replacements.push([match[1], match[2]]);
						else if ((rp = replacements.find(r => line.includes(r[1])))) line = line.replace(rp[1], rp[0]);
					} */
					if (line.startsWith("export *")) return "[DELETE]";
					if (line.startsWith("import ")) {
						if (line.endsWith("l")) return "[DELETE]";
						lookForImport = true;
					}
					if (lookForImport) {
						if (line.endsWith(";")) lookForImport = false;
						return "[DELETE]";
					}
					return line;
				})
				.filter(line => line !== "[DELETE]")
				.join("\n");
			text += `/* File: ${new URL(f.name, dir).pathname.replace(typesBase.pathname, "")} */\n${txt}`
			;
		}
	}
}

const typesBase = new URL("Types/", import.meta.url);
await runProcess(typesBase);
await writeFile(new URL("./types.d.ts", import.meta.url), text);
