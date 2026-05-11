export type ClubRankingEntry = {
  posicion: number;
  club: string;
  puntos: number;
  oros: number;
  platas: number;
  bronces: number;
};

export type EventoInput = {
  fecha: string;
  nombre: string;
  sede: string;
  pais: string;
  organiza?: string;
  obs?: string;
  tag?: 'aara' | 'int' | 'nota';
  estado?: 'suspendido' | 'pospuesto';
  url?: string;
  urlResultados?: string;
  urlInscriptos?: string;
  rankingClubes?: ClubRankingEntry[];
};

export type MesData = { nombre: string; id: string; eventos: EventoInput[] };

export type EventoConSlug = EventoInput & {
  slug: string;
  mes: string;
  mesNombre: string;
};

export const meses: MesData[] = [
  {
    nombre: "Enero", id: "enero",
    eventos: [
      { fecha: "30–31", nombre: "Evaluación cerrada", sede: "Tigre", pais: "Bs. As.", organiza: "AARA", obs: "Matrix race grupo, Sub 19 y Sub 23 preselec, 1500m", tag: "aara" },
    ],
  },
  {
    nombre: "Febrero", id: "febrero",
    eventos: [
      { fecha: "1",     nombre: "Evaluación cerrada",              sede: "Tigre",      pais: "Bs. As.",    organiza: "AARA", obs: "Matrix race grupo, Sub 19 y Sub 23 preselec, 1500m", tag: "aara" },
      { fecha: "6–26",  nombre: "Concentración",                   sede: "Tigre",      pais: "Bs. As.",    organiza: "AARA", obs: "Sub 19 y Sub 23 grupo preseleccionado", tag: "aara" },
      { fecha: "15",    nombre: "Coastal – Beach Sprint – Velocidad", sede: "Corrientes", pais: "Corrientes", organiza: "CRC" },
      { fecha: "21",    nombre: "Especial",                        sede: "Tigre",      pais: "Bs. As.",    organiza: "RCA",  obs: "Festival de ochos" },
      { fecha: "27–28", nombre: "Evaluación cerrada",              sede: "Tigre",      pais: "Bs. As.",    organiza: "AARA", obs: "Definición botes chicos U19 y U23, evaluación abierta grupo senior", tag: "aara" },
      { fecha: "28",    nombre: "Travesía Doble Vuelta del Ocho",  sede: "Paraná",     pais: "Entre Ríos", organiza: "PRC",  obs: "Doble par c/timonel" },
    ],
  },
  {
    nombre: "Marzo", id: "marzo",
    eventos: [
      { fecha: "1",     nombre: "Evaluación cerrada",           sede: "Tigre",                  pais: "Bs. As.",   organiza: "AARA",  obs: "Definición botes chicos U19 y U23, evaluación abierta", tag: "aara" },
      { fecha: "1–14",  nombre: "Concentración",                sede: "Tigre",                  pais: "Bs. As.",   organiza: "AARA",  obs: "Concentración Terminal, Senior, Junior, Sub 23", tag: "aara" },
      { fecha: "6",     nombre: "Oficial",                      sede: "Carrizal",               pais: "Mendoza",   organiza: "CRICO", urlResultados: "/carrizal-2026" },
      { fecha: "7",     nombre: "Vendimia Master y Menores",    sede: "Lago Parque San Martín", pais: "Mendoza",   organiza: "CRICO" },
      { fecha: "8",     nombre: "Vendimia OFICIAL",             sede: "Lago Parque San Martín", pais: "Mendoza",   organiza: "CRICO" },
      { fecha: "8",     nombre: "Travesía",                     sede: "Tigre",                  pais: "Bs. As.",   organiza: "CRE" },
      { fecha: "9–29",  nombre: "Concentración",                sede: "Tigre",                  pais: "Bs. As.",   organiza: "AARA",  obs: "Concentración terminal grupo sudamericano", tag: "aara" },
      { fecha: "13–15", nombre: "Oficial / Velocidad",          sede: "Villa Constitución",     pais: "Santa Fe",  organiza: "CRIL" },
      { fecha: "14",    nombre: "Promocional",                  sede: "Villa Constitución",     pais: "Santa Fe",  organiza: "CNVC" },
      { fecha: "21",    nombre: "Selectivo Beach Sprint",       sede: "Zárate",                 pais: "Bs. As.",   organiza: "AARA",  tag: "aara" },
      { fecha: "21",    nombre: "Promocional / Indoor",         sede: "Bariloche",              pais: "Río Negro", organiza: "CRB" },
      { fecha: "21–22", nombre: "Promocional",                  sede: "Tigre",                  pais: "Bs. As.",   organiza: "CCI" },
      { fecha: "22",    nombre: "Travesía / Beach Sprint",      sede: "Bariloche",              pais: "Río Negro", organiza: "CRB" },
      { fecha: "23",    nombre: "Velocidad",                    sede: "Bariloche",              pais: "Río Negro", organiza: "CRB" },
      { fecha: "26–29", nombre: "Sudamericano de Remo U19 y U23", sede: "Porto Alegre",        pais: "Brasil",    organiza: "CSAR",  tag: "int" },
    ],
  },
  {
    nombre: "Abril", id: "abril",
    eventos: [
      { fecha: "3–4",     nombre: "Promocional",                       sede: "Laguna de los Padres", pais: "Bs. As.",   organiza: "CNMP" },
      { fecha: "4",       nombre: "Travesía",                          sede: "Rosario",              pais: "Santa Fe",  organiza: "CNMA", obs: "Doble par c/timonel" },
      { fecha: "5",       nombre: "Beach Sprint",                      sede: "Mar del Plata",        pais: "Bs. As.",   organiza: "CNMP" },
      { fecha: "9–12",    nombre: "Sudamericano por Clubes Master",    sede: "Asunción",             pais: "Paraguay",  organiza: "FPR",  tag: "int" },
      { fecha: "11",      nombre: "Día Nacional del Remero",           sede: "—",                    pais: "—",         obs: "Conmemoración del natalicio de Dn. Alberto Demiddi (1944–2000)", tag: "nota" },
      { fecha: "12",      nombre: "Travesía",                          sede: "Tigre",                pais: "Bs. As.",   organiza: "CRA",  obs: "Un par c/timonel" },
      { fecha: "14–18",   nombre: "Copa Sudamericana Junior y Senior", sede: "Asunción",             pais: "Paraguay",  organiza: "FPR",  tag: "int" },
      { fecha: "20–26",   nombre: "Copa América Remo Coastal",         sede: "Lima",                 pais: "Perú",                        tag: "int" },
      { fecha: "24–3/05", nombre: "Concentración",                     sede: "Tigre",                pais: "Bs. As.",   organiza: "AARA", obs: "Concentración grupo ODESUR", tag: "aara" },
      { fecha: "26",      nombre: "Travesía",                          sede: "Rosario",              pais: "Santa Fe",  organiza: "PNBE", obs: "Doble par c/timonel" },
      { fecha: "30",      nombre: "Evaluación cerrada",                sede: "Tigre",                pais: "Bs. As.",   organiza: "AARA", obs: "Matrix race grupo senior preseleccionado", tag: "aara" },
    ],
  },
  {
    nombre: "Mayo", id: "mayo",
    eventos: [
      { fecha: "1–3",   nombre: "Evaluación cerrada",                      sede: "Tigre",          pais: "Bs. As.",    organiza: "AARA",  obs: "Matrix race grupo senior preseleccionado", tag: "aara" },
      { fecha: "2",     nombre: "Regata Especial / Indoor",                sede: "Paraná",         pais: "Entre Ríos", organiza: "PRC" },
      { fecha: "8–10",  nombre: "Oficial / Velocidad",                     sede: "Villa Carlos Paz", pais: "Córdoba",  organiza: "CRIL" },
      { fecha: "9",     nombre: "Promocional",                             sede: "Villa Carlos Paz", pais: "Córdoba",  organiza: "ACR" },
      { fecha: "10",    nombre: "Travesía",                                sede: "Tigre",          pais: "Bs. As.",    organiza: "BARC" },
      { fecha: "13–17", nombre: "IV Campeonato Americano de Beach Sprint", sede: "Punta Leona",    pais: "Costa Rica", organiza: "FCRR",  tag: "int" },
      { fecha: "17",    nombre: "Travesía",                                sede: "Rosario",        pais: "Santa Fe",   organiza: "RRC",   obs: "Doble par c/timonel" },
      { fecha: "24",    nombre: "Promocional",                             sede: "Campana",        pais: "Bs. As.",    organiza: "CBC", },
      { fecha: "29–31", nombre: "Concentración / Control",                 sede: "Tigre",          pais: "Bs. As.",    organiza: "AARA",  obs: "Grupo senior ODESUR 2000m", tag: "aara" },
      { fecha: "30–31", nombre: "World Rowing Cup I",                      sede: "Sevilla",        pais: "España",     organiza: "FISA",  tag: "int" },
    ],
  },
  {
    nombre: "Junio", id: "junio",
    eventos: [
      { fecha: "7",     nombre: "Travesía",                               sede: "Tigre",                pais: "Bs. As.",  organiza: "TBC" },
      { fecha: "11–14", nombre: "US Rowing Youth National Championships", sede: "Sarasota",             pais: "EE.UU.",   tag: "int" },
      { fecha: "14",    nombre: "Indoor",                                 sede: "Tigre",                pais: "Bs. As.",  organiza: "CNH" },
      { fecha: "19–21", nombre: "Campeonato Panamericano Coastal",        sede: "Pto. Progreso-Mérida", pais: "México",   organiza: "COPARE", tag: "int" },
      { fecha: "20–21", nombre: "Oficial",                                sede: "Laguna de los Padres", pais: "Bs. As.", organiza: "CRIT" },
      { fecha: "26–28", nombre: "Concentración / Control",                sede: "Tigre",                pais: "Bs. As.",  organiza: "AARA", obs: "Grupo senior ODESUR 2000m", tag: "aara" },
      { fecha: "27",    nombre: "Travesía",                               sede: "Rosario",              pais: "Santa Fe", organiza: "CARC", obs: "Doble par c/timonel" },
    ],
  },
  {
    nombre: "Julio", id: "julio",
    eventos: [
      { fecha: "5",     nombre: "Travesía",                         sede: "Tigre",       pais: "Bs. As.",    organiza: "CRHA", obs: "Un par c/timonel" },
      { fecha: "10–12", nombre: "Sudamericano por Clubes Menores",  sede: "Asunción",    pais: "Paraguay",   organiza: "FPR",  obs: "3ra. Copa", tag: "int" },
      { fecha: "18–19", nombre: "Oficial – Promocional",            sede: "Valle María", pais: "Entre Ríos", organiza: "CRICO" },
      { fecha: "25",    nombre: "Travesía",                         sede: "Rosario",     pais: "Santa Fe",   organiza: "CRR",  obs: "Doble par c/timonel" },
      { fecha: "25–26", nombre: "World Rowing Championship Sub 23", sede: "Duisburg",    pais: "Alemania",   organiza: "FISA", tag: "int" },
      { fecha: "25–27", nombre: "Boston Beach Sprint (HOCR)",       sede: "Boston",      pais: "EE.UU.",     tag: "int" },
      { fecha: "26",    nombre: "Indoor",                           sede: "Zárate",      pais: "Bs. As.",    organiza: "CNZ" },
      { fecha: "29–31", nombre: "Concentración / Control",          sede: "Tigre",       pais: "Bs. As.",    organiza: "AARA", obs: "Grupo senior ODESUR 2000m", tag: "aara" },
    ],
  },
  {
    nombre: "Agosto", id: "agosto",
    eventos: [
      { fecha: "8–9",   nombre: "World Rowing Championship Sub 19",  sede: "Plovdiv",         pais: "Bulgaria",      organiza: "FISA", tag: "int" },
      { fecha: "9",     nombre: "Travesía",                          sede: "Tigre",            pais: "Bs. As.",       organiza: "CRLM" },
      { fecha: "15",    nombre: "CAR Indoor – Evaluación Nacional",  sede: "San Fernando",     pais: "Bs. As.",       organiza: "AARA", tag: "aara" },
      { fecha: "21–23", nombre: "Oficial / Promocional",             sede: "Valle María",      pais: "Entre Ríos",   organiza: "CRIL" },
      { fecha: "22–30", nombre: "World Rowing Championship Senior",  sede: "Amsterdam",        pais: "Países Bajos",  organiza: "FISA", tag: "int" },
      { fecha: "30",    nombre: "Travesía",                          sede: "Villa Carlos Paz", pais: "Córdoba",       organiza: "ACR",  obs: "Doble par c/timonel" },
    ],
  },
  {
    nombre: "Septiembre", id: "septiembre",
    eventos: [
      { fecha: "1–12",  nombre: "Concentración",                sede: "Tigre",       pais: "Bs. As.",  organiza: "AARA", obs: "Concentración terminal grupo ODESUR", tag: "aara" },
      { fecha: "6",     nombre: "Travesía",                     sede: "Tigre",       pais: "Bs. As.",  organiza: "CNH" },
      { fecha: "12–18", nombre: "Juegos ODESUR",                sede: "Santa Fe",    pais: "Santa Fe", organiza: "CSAR", tag: "int" },
      { fecha: "13",    nombre: "Promocional",                  sede: "A definir",   pais: "Bs. As.",  organiza: "CRT" },
      { fecha: "19–22", nombre: "Juegos ODESUR (Beach Sprint)", sede: "Rosario",     pais: "Santa Fe", tag: "int" },
      { fecha: "20",    nombre: "Travesía",                     sede: "Tigre",       pais: "Bs. As.",  organiza: "CRT" },
      { fecha: "25–27", nombre: "Oficial – Promocional",        sede: "Tigre",       pais: "Bs. As.",  organiza: "CRIT" },
      { fecha: "27",    nombre: "Travesía",                     sede: "San Nicolás", pais: "Bs. As.",  organiza: "CRSN", obs: "Doble par c/timonel" },
    ],
  },
  {
    nombre: "Octubre", id: "octubre",
    eventos: [
      { fecha: "4",       nombre: "Travesía",                          sede: "Tigre",                  pais: "Bs. As.",  organiza: "CCI" },
      { fecha: "11",      nombre: "Regata Andino Patagónica",          sede: "Lago Parque San Martín", pais: "Mendoza",  organiza: "CMR" },
      { fecha: "17–18",   nombre: "Promocional",                       sede: "Tigre",                  pais: "Bs. As.",  organiza: "TBC" },
      { fecha: "23–25",   nombre: "Oficial / Promocional / Velocidad", sede: "Villa Constitución",     pais: "Santa Fe", organiza: "CRIL" },
      { fecha: "23–26",   nombre: "World Rowing Beach Sprint Finals",  sede: "Qingdao",                pais: "China",    organiza: "FISA", tag: "int" },
      { fecha: "29–1/11", nombre: "CARM",                              sede: "Valle María",            pais: "Entre Ríos", organiza: "AARA", tag: "aara" },
      { fecha: "31–13/11",nombre: "YOG",                              sede: "Dakar",                  pais: "Senegal",  tag: "int" },
    ],
  },
  {
    nombre: "Noviembre", id: "noviembre",
    eventos: [
      { fecha: "8",     nombre: "Travesía",               sede: "Tigre",    pais: "Bs. As.",  organiza: "CSF" },
      { fecha: "8",     nombre: "Especial",               sede: "Santa Fe", pais: "Santa Fe", organiza: "CRSF" },
      { fecha: "14",    nombre: "Coastal – Beach Sprint", sede: "Zárate",   pais: "Bs. As.",  organiza: "CNZ" },
      { fecha: "15",    nombre: "Promocional",            sede: "Zárate",   pais: "Bs. As.",  organiza: "CNZ" },
      { fecha: "19–22", nombre: "CAR",                   sede: "Tigre",    pais: "Bs. As.",  organiza: "AARA", tag: "aara" },
    ],
  },
  {
    nombre: "Diciembre", id: "diciembre",
    eventos: [
      { fecha: "A def.", nombre: "Especial Cabecera de Río",          sede: "Tigre",         pais: "Bs. As.",  organiza: "TBC" },
      { fecha: "6",      nombre: "Travesía",                          sede: "Rosario",       pais: "Santa Fe", organiza: "CRAl." },
      { fecha: "13",     nombre: "Encuentro Nacional de Travesía",    sede: "Tigre",         pais: "Bs. As.",  organiza: "CIRT/AARA", tag: "aara" },
      { fecha: "A def.", nombre: "Primer Mar del Plata Beach Sprint", sede: "Mar del Plata", pais: "Bs. As.",  organiza: "AARA/CNMP", tag: "aara" },
    ],
  },
];

export const todosLosEventos: EventoConSlug[] = meses.flatMap((mes) =>
  mes.eventos.map((e, i) => ({
    ...e,
    slug: `${mes.id}-ev${i + 1}`,
    mes: mes.id,
    mesNombre: mes.nombre,
  }))
);
