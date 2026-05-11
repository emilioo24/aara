import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const car2025 = require('./src/data/car2025_full.json');

// Extract winners only from Final A or Final directa (single-heat event)
const winnerRaces = {}; // athleteName -> [logro string]

for (const [id, ev] of Object.entries(car2025)) {
  const fases = ev.fases ?? [];

  let finalFase = null;

  // Case 1: there is a fase marked esFinal:true ("Final A")
  const esFinalFase = fases.find(f => f.esFinal);
  if (esFinalFase) {
    finalFase = esFinalFase;
  }
  // Case 2: only one fase (no finals ran) → "Final directa"
  else if (fases.length === 1) {
    finalFase = fases[0];
  }
  // Case 3: multiple heats but no final → skip (event wasn't finished with a final)

  if (!finalFase) continue;

  const winner = finalFase.resultados?.find(r => r.pos === 1);
  if (!winner) continue;

  const isFem = ev.gen === 'F';
  const prefix = isFem ? 'Campeóna Argentina CAR 2025' : 'Campeón Argentino CAR 2025';
  const logro = `${prefix} — ${ev.nombre}`;

  for (const raw of winner.atletas.split(' / ')) {
    const name = raw.trim();
    if (!winnerRaces[name]) winnerRaces[name] = [];
    winnerRaces[name].push(logro);
  }
}

console.log(`Winners from Final/Final directa: ${Object.keys(winnerRaces).length}`);
for (const [n, rs] of Object.entries(winnerRaces).sort()) {
  console.log(`  ${n}: ${rs.join(' | ')}`);
}

let content = readFileSync('./src/data/atletas.ts', 'utf-8');
const hasCRLF = content.includes('\r\n');
if (hasCRLF) content = content.replace(/\r\n/g, '\n');

// Step 1: Remove ALL existing logros lines (any content)
let removed = 0;
content = content.replace(/    logros: \[[\s\S]*?\],\n/g, () => { removed++; return ''; });
console.log(`\nRemoved ${removed} existing logros lines.`);

// Step 2: Add correct logros for each winner found in atletas.ts
let added = 0, notFound = [];

for (const [name, logros] of Object.entries(winnerRaces)) {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const logrosLine = `    logros: [${logros.map(l => `"${l}"`).join(', ')}],\n`;
  const re = new RegExp(`(    nombre: "${esc}",\n(?:    [^\n]+\n)*?    provincia: "[^"]+",\n)(  },)`);
  const next = content.replace(re, (_, inner, close) => { added++; return inner + logrosLine + close; });
  if (next === content) notFound.push(name);
  else content = next;
}

console.log(`Added logros for ${added} athletes.`);
if (notFound.length) console.log('Not found in atletas.ts:', notFound.join(', '));

if (hasCRLF) content = content.replace(/\n/g, '\r\n');
writeFileSync('./src/data/atletas.ts', content, 'utf-8');
console.log('Done — atletas.ts updated.');
