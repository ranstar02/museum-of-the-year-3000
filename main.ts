import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One deadpan museum label from the year 3000, beside an ordinary object
// from today: nail clippers, misread as a miniature guillotine.
const LABEL =
  "Nail clippers, c. 2025. A miniature guillotine for beheading the excess growth of the fingers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
