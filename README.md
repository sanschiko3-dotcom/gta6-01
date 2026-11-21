# SOLARA BAY

A 3D open-world crime game in an original sun-soaked coastal city.

[![Competition](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01)
[![Rank](https://make.fun/badge/gta6-01/sanschiko3-dotcom/gta6-01/rank.svg)](https://make.fun/bounty/gta6-01)
[![Reward](https://make.fun/badge/gta6-01/sanschiko3-dotcom/gta6-01/reward.svg)](https://make.fun/bounty/gta6-01)

## Run

```sh
node serve.ts
```

Open http://localhost:8080 in a desktop browser.

WASD moves and drives, Shift runs, E enters or exits a parked car, Space handbrakes, the mouse orbits the camera, and Esc pauses.


## Phase A features

Explore a procedural 3D coastal street grid with windowed buildings, palms, streetlights, beach, pier and ocean. Twenty-four parked cars use four box-built body variants; enter one to use the chase camera and speedometer. Buildings block movement on foot and in cars. The HUD shows health, starting cash, wanted stars and district.

The game runs entirely offline after loading local files, including the vendored three.js module. Title click starts play; Esc pauses and clicking resumes.

## Repeatable captures and packaging

Use `?shot=start&seed=1`, `?shot=play&seed=1` (driving), or `?shot=end&seed=1`. Seed controls city variation and shot cameras remain fixed for repeatable captures. Run `MAKEFUN_OUTPUT_DIR=/tmp/gta6-out node main.ts` to package the game and write `dossier.json`.

Traffic, pedestrians, police pursuit, missions and combat are planned for later phases.
