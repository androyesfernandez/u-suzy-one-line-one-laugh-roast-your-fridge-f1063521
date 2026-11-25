// One Line, One Laugh: Roast Your Fridge
// Competition: u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// Writes one original one-line roast of the fridge to /output/entry.txt.
// The guards below are the entry gate: the line must stay a single line of
// 1-200 characters, so any future edit that breaks that rule fails loudly
// instead of shipping a disqualified entry.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My fridge has a vegetable drawer that's basically a hospice, and every Sunday I open it like a doctor on rounds, checking which carrot has quietly signed a do-not-resuscitate form.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

if (LINE.trim() === "") {
  throw new Error("LINE must not be blank");
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line with no newline characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
