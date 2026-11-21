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

Phase B adds twelve lane-following traffic vehicles, timed intersection signals,
twenty sidewalk walkers who flee fast vehicles, impact knockdowns and vehicle damage
smoke. Witnessed theft and pedestrian/police impacts raise five HUD wanted stars.
Patrol units pursue, flash lights and sound a synthesized proximity siren after a
click. Break building-occluded police sight for ten seconds to lose a star.
Busted and wasted recoveries deduct $100. Use `?shot=chase&seed=1` for a pursuit view.

Phase B verification: dossier packaging passed. Headless verification attempted
 twice: Chromium sandbox initialization was denied, then localhost connection was
refused on the escalated retry. Browser console/pixel checks and the Phase B
screenshot remain unverified. Phase C should also refine police road routing,
pedestrian corner behavior, and dedicated station/hospital landmarks.

## Phase C
Eight chained crew jobs begin at the gold safehouse beacon with F. Deliver cars and packages, evade police, race checkpoints, ram attackers and escape a bank vault. Esc opens saves and completed mission replays. Three local save slots retain cash, respect, position and palm coins; mission rewards autosave. Radio stations SOL FM, NEON WAVE and PALMA use local WebAudio synthesis; switch with [ and ] after clicking. The north-up minimap tracks traffic, patrols and objectives. Collect 20 gold rings ($25 each), or follow the green taxi beacon for $150 fares.
