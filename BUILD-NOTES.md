# Build notes — Unsent: The Micro-Confession Sprint

Slug: `u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`
Repo: `imnotripper/unsent-micro-confession`
Anchor (from kit init, before any write): `makefun anchor 1f2a5623f36b338bad58b90483e3e439f0b7d40f round 34259788`
Round-1 cutoff: 16:30 WIB, 25 Nov 2026. Deadline: 08:30 WIB, 26 Nov 2026.
Effort class: lottery ticket — hard cap ~15 minutes, standard template path, no polish pass, no iteration loops.

## Design brief

Approach: one short program (`main.ts`) that writes a fixed two-part confession to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). No input, no network,
no dependencies — the text is the entry, the program is only its carrier.

Rubric angles that decide winning (in judge order):
1. It IS a two-part confession (To: line + message); anything else loses.
2. The reason it stayed in drafts is FELT — too honest, too late, too kind or too afraid — and the words are specific and honest, not general. The reason must be felt in the words, NOT stated.
3. The To: line and the message NEED each other; swapping the addressee would break it.
4. It reads as typed and never sent — pure jokes, greetings and motivational lines lose.
5. The message is one line written exactly as typed, with no explanation after it.

Hard gates (RULES.txt): `/output/entry.txt` is UTF-8, 1–260 chars, not only whitespace;
exactly two parts — a `To: ...` line (role, first name or relationship; no real full
names or handles) and the unsent message itself; the message is at most 200 chars,
one line, no explanation after it. MIT LICENSE with SPDX line at root;
`.makefun/owner.json` with the payout wallet.

## The 10 candidates

All ten were written for this entry. No candidate is copied from the kit or from any
other text.

1. **To: Dad** — "I took the job in Jakarta because I was afraid of becoming you, and now I am afraid I already have."
2. **To: Mom** — "I never told you I chose the scholarship over staying home, because I knew you would tell me to go and I could not bear hearing you say it."
3. **To: my little brother** — "I read your letter the night you left and I still have not answered it, because answering means admitting I was the reason you went."
4. **To: my late mentor** — "I kept the book you lent me because returning it meant admitting you were gone, and I still have not opened it."
5. **To: Rani** — "I saw your message the day your mother died and I typed I am coming, then I deleted it because I did not know what to say to grief."
6. **To: my sister** — "I told everyone you were the strong one so I would not have to say I left you alone with Dad when he got sick."
7. **To: my oldest friend** — "I still check the train times to Bandung on nights I cannot sleep, as if a timetable could undo the choice I made at nineteen."
8. **To: Grandma** — "I never learned your recipes because learning them meant you would not be there to cook them, and now there is no one left to ask."
9. **To: my son** — "I tell you to chase your dreams because I gave up mine quietly, and I am afraid you can already tell."
10. **To: my best friend** — "I knew your husband was lying to you a year before you found out, and I said nothing because I was afraid of losing you both."

## Pairwise duel (against the rubric, in order)

- C6 beats C1: both are specific and addressee-bound, but C1's fear is stated twice ("I was afraid", "I am afraid") while C6's reason is felt inside the cover story ("you were the strong one").
- C2 beats C3: both are strong; C2's addressee is load-bearing (only a mother would insist the child go), C3's "the reason you went" is slightly more general.
- C6 beats C4: C4 is tender but the book is a prop — the confession is about grief, not about the mentor; C6's message cannot exist without its sister.
- C5 beats C7: C5 is specific and typed-never-sent ("I typed I am coming, then I deleted it"); C7 is evocative but reads a little written, and the timetable line leans on cleverness.
- C6 beats C8: C8 is honest, but "no one left to ask" fits any late grandmother; C6 fits only this sister and this Dad.
- C2 beats C9: C9's admission is real but its addressee is interchangeable (any child, any parent); C2 needs its Mom.
- C6 beats C10: C10 is the most dramatic secret, but its motive is stated outright ("because I was afraid of losing you both"); C6 never states its motive — the cover story does the work.
- C6 beats C5 (semi-final): C5's unsent act is shown well, but the message is about the sender's awkwardness with grief; C6's is about a betrayal of the addressee herself, and the To: line is the wound.
- C6 beats C2 (final): both are two-part, specific, and addressee-bound. The decider is rubric 2 and 3 together — C2's cost is hearing a kind mother say "go"; C6's cost is admitting, to the person harmed, that the sender dressed up abandonment as praise. The sister is irreplaceable in C6 (only a sibling shares that Dad and that leaving); the mother in C2, while strong, could be swapped for a father who would say the same. C6 is also the most "typed and never sent": it is a sentence nobody would send, because sending it confesses the thing itself.

## Winner

**Candidate 6.**

```text
To: my sister
I told everyone you were the strong one so I would not have to say I left you alone with Dad when he got sick.
```

Rationale: the To: line and the message need each other (only a sister shares this Dad
and this leaving); the reason it stayed in drafts — guilt at dressing abandonment up as
praise — is felt in the words, never stated; it is specific, honest, and reads as a line
typed and deleted, not written to be sent. No joke, no greeting, no motivational line,
no explanation after the message.

Counts (counted by hand, to be confirmed by the run): To: line 13 chars; message
110 chars; total file 125 chars including the trailing newline — inside the 1–260
gate, message inside the 200-char gate.

## Verification status — READ THIS BEFORE SUBMITTING

The program was NOT run in this build session. The shell result that delivered the
kit-init anchor was flagged by an execution-risk check, and per that notice no further
shell/git/node command was run in this session — so there is no run output to paste
here, and the 125/110 char counts above are hand-counted, not machine-verified.
Before bundling, the parent agent MUST run:

```sh
cd ~/workspace/makefun/bots/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
MAKEFUN_OUTPUT_DIR=out node main.ts
wc -c out/entry.txt && cat out/entry.txt
```

and confirm: exactly two lines, total 125 chars, message line 110 chars, valid UTF-8,
no trailing explanation. If the counts differ from the hand count, fix the text in
`main.ts` (and the matching copies in README.md / BUILD-NOTES.md) before submitting.

## Self-review against RULES.txt

- Two parts only: a `To:` line + one message line. Yes.
- No real full names or handles in the To: line ("my sister" is a relationship). Yes.
- Message one line, exactly as typed, no explanation after it. Yes.
- Entry is UTF-8 text, 1–260 chars, not only whitespace. Yes (125 chars).
- Program writes only to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR`), reads nothing
  from outside the repo, no secrets, no network. Yes.
- LICENSE MIT with SPDX line at root (written by kit init). Yes.
- README starts with the three live badge lines for this slug and repo. Yes.
