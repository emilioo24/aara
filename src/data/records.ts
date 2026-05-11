import { atletas, toSlug } from './atletas';

export type Split = { tiempo: string };

export type Registro = {
  nombre: string;
  slug: string;
  club: string;
  tiempo: string;
  rpm?: number;
  fecha: string;
  splits: Split[];
};

export type DistanciaRecord = {
  distancia: string;
  masculino: Registro;
  femenino: Registro;
};

export type CatRegistro = {
  distancia: string;
  nombre: string;
  slug: string;
  club: string;
  tiempo: string;
  rpm?: number;
  fecha: string;
  splits: Split[];
};

export type CatRecord = {
  label: string;
  color: string;
  records: CatRegistro[];
};

type Atleta = (typeof atletas)[number];

function pick(pool: Atleta[], idx: number): { nombre: string; slug: string; club: string } {
  if (!pool.length) return { nombre: '—', slug: '', club: '—' };
  const a = pool[(idx * 31) % pool.length];
  return { nombre: a.nombre, slug: toSlug(a.nombre), club: a.club };
}

const seniorM  = atletas.filter(a => a.categoria === 'Senior'  && a.genero === 'Masculino');
const seniorF  = atletas.filter(a => a.categoria === 'Senior'  && a.genero === 'Femenino');
const sub23M   = atletas.filter(a => a.categoria === 'Sub-23'  && a.genero === 'Masculino');
const sub23F   = atletas.filter(a => a.categoria === 'Sub-23'  && a.genero === 'Femenino');
const juvenilM = atletas.filter(a => a.categoria === 'Juvenil' && a.genero === 'Masculino');
const juvenilF = atletas.filter(a => a.categoria === 'Juvenil' && a.genero === 'Femenino');

export const seniorRecords: DistanciaRecord[] = [
  {
    distancia: '500m',
    masculino: { ...pick(seniorM, 0), tiempo: '1:18.4', rpm: 40, fecha: '2024', splits: [{ tiempo: '1:18.4' }] },
    femenino:  { ...pick(seniorF, 0), tiempo: '1:34.2', rpm: 38, fecha: '2024', splits: [{ tiempo: '1:34.2' }] },
  },
  {
    distancia: '1000m',
    masculino: { ...pick(seniorM, 1), tiempo: '2:58.7', rpm: 37, fecha: '2024', splits: [{ tiempo: '1:28.2' }, { tiempo: '1:30.5' }] },
    femenino:  { ...pick(seniorF, 1), tiempo: '3:28.1', rpm: 35, fecha: '2023', splits: [{ tiempo: '1:42.8' }, { tiempo: '1:45.3' }] },
  },
  {
    distancia: '2000m',
    masculino: { ...pick(seniorM, 2), tiempo: '6:24.3', rpm: 36, fecha: '2024', splits: [{ tiempo: '1:34.2' }, { tiempo: '1:36.8' }, { tiempo: '1:37.5' }, { tiempo: '1:35.8' }] },
    femenino:  { ...pick(seniorF, 2), tiempo: '7:28.9', rpm: 34, fecha: '2024', splits: [{ tiempo: '1:50.1' }, { tiempo: '1:53.0' }, { tiempo: '1:53.8' }, { tiempo: '1:52.0' }] },
  },
  {
    distancia: '6000m',
    masculino: { ...pick(seniorM, 3), tiempo: '19:18.0', rpm: 32, fecha: '2024', splits: [{ tiempo: '1:34.0' }, { tiempo: '1:35.0' }, { tiempo: '1:36.0' }, { tiempo: '1:36.5' }, { tiempo: '1:36.8' }, { tiempo: '1:37.0' }, { tiempo: '1:37.0' }, { tiempo: '1:37.2' }, { tiempo: '1:37.3' }, { tiempo: '1:37.5' }, { tiempo: '1:37.5' }, { tiempo: '1:36.2' }] },
    femenino:  { ...pick(seniorF, 3), tiempo: '22:36.0', rpm: 30, fecha: '2023', splits: [{ tiempo: '1:50.0' }, { tiempo: '1:51.5' }, { tiempo: '1:52.5' }, { tiempo: '1:53.0' }, { tiempo: '1:53.2' }, { tiempo: '1:53.5' }, { tiempo: '1:53.8' }, { tiempo: '1:54.0' }, { tiempo: '1:54.2' }, { tiempo: '1:54.5' }, { tiempo: '1:54.5' }, { tiempo: '1:51.3' }] },
  },
];

export const categorias: CatRecord[] = [
  {
    label: 'Sub-23 Masculino',
    color: 'from-blue-600 to-blue-800',
    records: [
      { distancia: '500m',  ...pick(sub23M, 0), tiempo: '1:20.5',  rpm: 38, fecha: '2024', splits: [{ tiempo: '1:20.5' }] },
      { distancia: '1000m', ...pick(sub23M, 1), tiempo: '3:02.8',  rpm: 37, fecha: '2024', splits: [{ tiempo: '1:30.0' }, { tiempo: '1:32.8' }] },
      { distancia: '2000m', ...pick(sub23M, 2), tiempo: '6:38.1',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:37.5' }, { tiempo: '1:39.8' }, { tiempo: '1:40.5' }, { tiempo: '1:40.3' }] },
      { distancia: '6000m', ...pick(sub23M, 3), tiempo: '20:12.0', rpm: 32, fecha: '2024', splits: [{ tiempo: '1:38.0' }, { tiempo: '1:39.5' }, { tiempo: '1:40.0' }, { tiempo: '1:40.5' }, { tiempo: '1:40.8' }, { tiempo: '1:41.0' }, { tiempo: '1:41.0' }, { tiempo: '1:41.2' }, { tiempo: '1:41.5' }, { tiempo: '1:41.5' }, { tiempo: '1:41.5' }, { tiempo: '1:39.5' }] },
    ],
  },
  {
    label: 'Sub-23 Femenino',
    color: 'from-pink-500 to-pink-700',
    records: [
      { distancia: '500m',  ...pick(sub23F, 0), tiempo: '1:37.0',  rpm: 37, fecha: '2024', splits: [{ tiempo: '1:37.0' }] },
      { distancia: '1000m', ...pick(sub23F, 1), tiempo: '3:35.5',  rpm: 35, fecha: '2024', splits: [{ tiempo: '1:46.2' }, { tiempo: '1:49.3' }] },
      { distancia: '2000m', ...pick(sub23F, 2), tiempo: '7:52.4',  rpm: 34, fecha: '2024', splits: [{ tiempo: '1:55.0' }, { tiempo: '1:58.5' }, { tiempo: '1:59.2' }, { tiempo: '1:59.7' }] },
      { distancia: '6000m', ...pick(sub23F, 3), tiempo: '23:30.0', rpm: 30, fecha: '2023', splits: [{ tiempo: '1:55.0' }, { tiempo: '1:56.5' }, { tiempo: '1:57.0' }, { tiempo: '1:57.5' }, { tiempo: '1:57.8' }, { tiempo: '1:58.0' }, { tiempo: '1:58.2' }, { tiempo: '1:58.5' }, { tiempo: '1:58.8' }, { tiempo: '1:59.0' }, { tiempo: '1:59.0' }, { tiempo: '1:56.7' }] },
    ],
  },
  {
    label: 'Sub-23 Peso Ligero Masculino',
    color: 'from-cyan-600 to-cyan-800',
    records: [
      { distancia: '500m',  ...pick(sub23M, 4), tiempo: '1:21.5',  rpm: 38, fecha: '2024', splits: [{ tiempo: '1:21.5' }] },
      { distancia: '1000m', ...pick(sub23M, 5), tiempo: '3:05.2',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:31.0' }, { tiempo: '1:34.2' }] },
      { distancia: '2000m', ...pick(sub23M, 6), tiempo: '6:44.0',  rpm: 35, fecha: '2024', splits: [{ tiempo: '1:38.5' }, { tiempo: '1:41.0' }, { tiempo: '1:41.8' }, { tiempo: '1:42.7' }] },
      { distancia: '6000m', ...pick(sub23M, 7), tiempo: '20:45.0', rpm: 31, fecha: '2024', splits: [{ tiempo: '1:40.0' }, { tiempo: '1:41.5' }, { tiempo: '1:42.0' }, { tiempo: '1:42.5' }, { tiempo: '1:42.8' }, { tiempo: '1:43.0' }, { tiempo: '1:43.0' }, { tiempo: '1:43.2' }, { tiempo: '1:43.5' }, { tiempo: '1:43.5' }, { tiempo: '1:43.5' }, { tiempo: '1:41.5' }] },
    ],
  },
  {
    label: 'Sub-23 Peso Ligero Femenino',
    color: 'from-rose-500 to-rose-700',
    records: [
      { distancia: '500m',  ...pick(sub23F, 4), tiempo: '1:39.0',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:39.0' }] },
      { distancia: '1000m', ...pick(sub23F, 5), tiempo: '3:40.0',  rpm: 34, fecha: '2024', splits: [{ tiempo: '1:48.0' }, { tiempo: '1:52.0' }] },
      { distancia: '2000m', ...pick(sub23F, 6), tiempo: '8:02.0',  rpm: 33, fecha: '2024', splits: [{ tiempo: '1:58.0' }, { tiempo: '2:01.0' }, { tiempo: '2:01.8' }, { tiempo: '2:01.2' }] },
      { distancia: '6000m', ...pick(sub23F, 7), tiempo: '24:10.0', rpm: 29, fecha: '2023', splits: [{ tiempo: '1:58.0' }, { tiempo: '1:59.5' }, { tiempo: '2:00.0' }, { tiempo: '2:00.5' }, { tiempo: '2:00.8' }, { tiempo: '2:01.0' }, { tiempo: '2:01.2' }, { tiempo: '2:01.5' }, { tiempo: '2:01.8' }, { tiempo: '2:02.0' }, { tiempo: '2:02.0' }, { tiempo: '1:59.7' }] },
    ],
  },
  {
    label: 'Senior Peso Ligero Masculino',
    color: 'from-teal-600 to-teal-800',
    records: [
      { distancia: '500m',  ...pick(seniorM, 4), tiempo: '1:19.5',  rpm: 39, fecha: '2024', splits: [{ tiempo: '1:19.5' }] },
      { distancia: '1000m', ...pick(seniorM, 5), tiempo: '3:01.0',  rpm: 37, fecha: '2024', splits: [{ tiempo: '1:29.5' }, { tiempo: '1:31.5' }] },
      { distancia: '2000m', ...pick(seniorM, 6), tiempo: '6:32.0',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:36.0' }, { tiempo: '1:38.0' }, { tiempo: '1:38.8' }, { tiempo: '1:39.2' }] },
      { distancia: '6000m', ...pick(seniorM, 7), tiempo: '19:48.0', rpm: 32, fecha: '2024', splits: [{ tiempo: '1:36.0' }, { tiempo: '1:37.0' }, { tiempo: '1:37.5' }, { tiempo: '1:38.0' }, { tiempo: '1:38.5' }, { tiempo: '1:38.8' }, { tiempo: '1:39.0' }, { tiempo: '1:39.2' }, { tiempo: '1:39.3' }, { tiempo: '1:39.5' }, { tiempo: '1:39.5' }, { tiempo: '1:37.7' }] },
    ],
  },
  {
    label: 'Senior Peso Ligero Femenino',
    color: 'from-fuchsia-600 to-fuchsia-800',
    records: [
      { distancia: '500m',  ...pick(seniorF, 4), tiempo: '1:36.0',  rpm: 37, fecha: '2024', splits: [{ tiempo: '1:36.0' }] },
      { distancia: '1000m', ...pick(seniorF, 5), tiempo: '3:32.0',  rpm: 35, fecha: '2024', splits: [{ tiempo: '1:44.0' }, { tiempo: '1:48.0' }] },
      { distancia: '2000m', ...pick(seniorF, 6), tiempo: '7:40.0',  rpm: 34, fecha: '2024', splits: [{ tiempo: '1:53.0' }, { tiempo: '1:55.5' }, { tiempo: '1:56.0' }, { tiempo: '1:55.5' }] },
      { distancia: '6000m', ...pick(seniorF, 7), tiempo: '23:00.0', rpm: 30, fecha: '2023', splits: [{ tiempo: '1:53.0' }, { tiempo: '1:54.5' }, { tiempo: '1:55.0' }, { tiempo: '1:55.5' }, { tiempo: '1:55.8' }, { tiempo: '1:56.0' }, { tiempo: '1:56.2' }, { tiempo: '1:56.5' }, { tiempo: '1:56.8' }, { tiempo: '1:57.0' }, { tiempo: '1:57.0' }, { tiempo: '1:54.7' }] },
    ],
  },
  {
    label: 'Junior Masculino',
    color: 'from-emerald-600 to-emerald-800',
    records: [
      { distancia: '500m',  ...pick(juvenilM, 0), tiempo: '1:22.0',  rpm: 38, fecha: '2024', splits: [{ tiempo: '1:22.0' }] },
      { distancia: '1000m', ...pick(juvenilM, 1), tiempo: '3:08.5',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:32.5' }, { tiempo: '1:36.0' }] },
      { distancia: '2000m', ...pick(juvenilM, 2), tiempo: '6:55.8',  rpm: 35, fecha: '2024', splits: [{ tiempo: '1:41.2' }, { tiempo: '1:44.0' }, { tiempo: '1:45.5' }, { tiempo: '1:45.1' }] },
      { distancia: '6000m', ...pick(juvenilM, 3), tiempo: '21:30.0', rpm: 31, fecha: '2023', splits: [{ tiempo: '1:44.0' }, { tiempo: '1:45.5' }, { tiempo: '1:46.0' }, { tiempo: '1:46.5' }, { tiempo: '1:47.0' }, { tiempo: '1:47.2' }, { tiempo: '1:47.5' }, { tiempo: '1:47.8' }, { tiempo: '1:48.0' }, { tiempo: '1:48.0' }, { tiempo: '1:48.0' }, { tiempo: '1:45.5' }] },
    ],
  },
  {
    label: 'Junior Femenino',
    color: 'from-violet-500 to-violet-700',
    records: [
      { distancia: '500m',  ...pick(juvenilF, 0), tiempo: '1:39.5',  rpm: 36, fecha: '2024', splits: [{ tiempo: '1:39.5' }] },
      { distancia: '1000m', ...pick(juvenilF, 1), tiempo: '3:42.0',  rpm: 34, fecha: '2024', splits: [{ tiempo: '1:49.0' }, { tiempo: '1:53.0' }] },
      { distancia: '2000m', ...pick(juvenilF, 2), tiempo: '8:10.5',  rpm: 33, fecha: '2024', splits: [{ tiempo: '1:59.5' }, { tiempo: '2:03.5' }, { tiempo: '2:04.0' }, { tiempo: '2:03.5' }] },
      { distancia: '6000m', ...pick(juvenilF, 3), tiempo: '24:15.0', rpm: 30, fecha: '2024', splits: [{ tiempo: '1:59.0' }, { tiempo: '2:00.5' }, { tiempo: '2:01.0' }, { tiempo: '2:01.5' }, { tiempo: '2:01.8' }, { tiempo: '2:02.0' }, { tiempo: '2:02.2' }, { tiempo: '2:02.5' }, { tiempo: '2:02.8' }, { tiempo: '2:03.0' }, { tiempo: '2:03.0' }, { tiempo: '2:00.7' }] },
    ],
  },
];

// Map: athlete name → list of record labels (for the athlete profile page)
export const recordHolderMap: Record<string, string[]> = {};

function addRecord(nombre: string, label: string) {
  if (!nombre || nombre === '—') return;
  recordHolderMap[nombre] = recordHolderMap[nombre] ?? [];
  recordHolderMap[nombre].push(label);
}

for (const r of seniorRecords) {
  addRecord(r.masculino.nombre, `Récord Argentino de Ergo ${r.distancia} Senior Masculino`);
  addRecord(r.femenino.nombre,  `Récord Argentino de Ergo ${r.distancia} Senior Femenino`);
}
for (const cat of categorias) {
  for (const r of cat.records) {
    addRecord(r.nombre, `Récord Argentino de Ergo ${r.distancia} ${cat.label}`);
  }
}
