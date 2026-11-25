// SPDX-License-Identifier: MIT
// Unsent: The Micro-Confession Sprint
// Writes exactly one two-part micro-confession to <output>/entry.txt:
// a "To: ..." line naming who it was meant for, then the unsent message
// itself on one line, written exactly as typed, with no explanation after it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const toLine = "To: my sister";
const message =
  "I told everyone you were the strong one so I would not have to say I left you alone with Dad when he got sick.";

const text = `${toLine}\n${message}\n`;
// Hard gates from RULES.txt, enforced before anything is written:
// whole file 1-260 chars, message line at most 200 chars.
if (text.length < 1 || text.length > 260) {
  throw new Error(`entry length ${text.length} is outside 1-260 chars`);
}
if (message.length > 200) {
  throw new Error(`message length ${message.length} exceeds 200 chars`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
