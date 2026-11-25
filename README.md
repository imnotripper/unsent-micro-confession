[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/imnotripper/unsent-micro-confession/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/imnotripper/unsent-micro-confession/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

# Unsent: The Micro-Confession Sprint

One micro-confession, in exactly two parts: a `To:` line naming who it was meant for, and the unsent message itself, one line written exactly as it was typed, with no explanation after it.

## The entry

```text
To: my sister
I told everyone you were the strong one so I would not have to say I left you alone with Dad when he got sick.
```

## How it runs

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the confession to `out/entry.txt` (or to `/output/entry.txt` when
`MAKEFUN_OUTPUT_DIR` is unset). The file is 125 characters including the trailing
newline, the message line is 110 characters, and it is plain UTF-8 text. The program
refuses to write if either length gate is ever breached, so a bad edit cannot silently
produce an invalid entry.

## Why this one

It is a confession to a sister about leaving her alone with their sick father — a specific, costly admission that only makes sense addressed to her. The reason it stayed unsent is felt in the words themselves: calling her "the strong one" was the cover story for not saying the hard thing. See `BUILD-NOTES.md` for the ten candidates and the pairwise duel that picked it.
