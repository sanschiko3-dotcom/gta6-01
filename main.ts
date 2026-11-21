// Package Solara Bay and its captured views for the make.fun judge.
import { rmSync, cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(join(here, 'game', 'index.html'))) throw new Error('Missing playable game/index.html');
// Reject empty output paths before copying the playable build.
if (!out.trim()) throw new Error('Output directory must not be empty');
for (const module of ['missions', 'hud', 'radio', 'save', 'combat', 'sound']) {
  if (!existsSync(join(here, 'game', 'src', module + '.js'))) throw new Error('Missing gameplay module: ' + module);
}
for (const name of ['1-start.jpg','2-chase.jpg','3-combat.jpg','4-mission.jpg']) {
  if (!existsSync(join(here, 'screenshots', name))) throw new Error('Missing showcase capture: '+name);
}
mkdirSync(out, { recursive: true });
cpSync(join(here, 'game'), join(out, 'game'), { recursive: true });
rmSync(join(out, 'screenshots'), { recursive: true, force: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });

writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
