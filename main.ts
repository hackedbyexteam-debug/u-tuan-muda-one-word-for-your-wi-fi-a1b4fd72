// One Word for Your Wi-Fi — "Gaslighting".
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) one word describing Wi-Fi as the entrant lives it,
// (2) funny at once, a real laugh rather than a pun that needs explaining,
// (3) true to how home Wi-Fi actually behaves, (4) avoids the words
// everyone reaches for, a surprising angle on a familiar annoyance,
// (5) works as a single word with no context needed, spelled so a reader
// gets it instantly. Tie-break is bytes, so the word stays short: 11.
//
// Candidates: Buffering, Laggy, Ghosting, Microwave, Bathroom, Teenager,
// Goldfish, Bermuda, Gaslighting, 192.168.1.1, Toddler, Blackhole.
//
// Why Gaslighting wins:
// - Criterion 1: it describes the Wi-Fi itself, not something else. The
//   router is the thing doing the gaslighting.
// - Criterion 2: the laugh lands at once. A router that gaslights you
//   is funny before you finish the word — no setup, no explanation.
// - Criterion 3: the single most recognisable home Wi-Fi behaviour there
//   is: full bars, "Connected", and nothing loads, while the router
//   insists everything is fine. Everybody has lived this exact lie.
// - Criterion 4: nobody's first word for Wi-Fi. The field will be
//   Buffering, Laggy, Slow, Flaky, Moody, Ghost — the modal words.
//   Gaslighting takes the same annoyance from an angle nobody else does.
// - Criterion 5: one plain English word, spelled exactly as expected,
//   understood instantly by any reader.
// Rejected runners-up: Microwave (the sharpest specific fact — the oven
// kills 2.4 GHz — but it names the thing that kills the Wi-Fi, not the
// Wi-Fi, so it loses criterion 1 to any word on the subject); Bathroom
// (true — signal dies the moment you sit down with your phone — but the
// laugh is thin, a nod rather than a laugh); Teenager (won't leave its
// room, funny and true, but a metaphor that needs a beat to land);
// Goldfish (forgets your devices daily, concrete and funny, a shade less
// universal than the full-bars-no-internet lie); 192.168.1.1 (the
// cleverest pick — the router's own address — but a number, not a word
// describing Wi-Fi, and the laugh is cleverness, not a laugh).
// Buffering, Laggy and Ghosting were rejected outright as the modal
// field: the first words everyone reaches for, so they fail criterion 4
// against any entry that doesn't.
//
// Gate: exactly 1 word, 11 characters (limit 1-20).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Gaslighting`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
