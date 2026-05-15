export type Noticia = {
  slug: string;
  fecha: string;
  categoria: string;
  titulo: string;
  resumen: string;
  imagen: string;
  contenido: string;
};

export const colorMap: Record<string, string> = {
  Administrativo: "bg-blue-100 text-blue-700",
  Calendario:     "bg-amber-100 text-amber-700",
  Institucional:  "bg-purple-100 text-purple-700",
  Competencia:    "bg-green-100 text-green-700",
  Formación:      "bg-orange-100 text-orange-700",
  Internacional:  "bg-red-100 text-red-700",
};

export const noticias: Noticia[] = [
  {
    slug: "aranceles-2026",
    fecha: "15 Abr 2025",
    categoria: "Administrativo",
    titulo: "Nuevos aranceles a partir de Enero del 2026",
    resumen: "Se actualizó el cuadro de aranceles para clubes, atletas y árbitros vigente a partir del 1° de enero de 2026. Descargá el documento oficial con todos los valores.",
    imagen: "",
    contenido: `
      <p>La Comisión Directiva de la Asociación Argentina de Remeros Aficionados (AARA) aprobó el nuevo cuadro de aranceles para la temporada 2026, con vigencia a partir del 1° de enero de 2026.</p>
      <p>Los nuevos valores fueron establecidos teniendo en cuenta el contexto económico actual y la necesidad de mantener el funcionamiento de los servicios institucionales. La actualización alcanza a los aranceles de clubes categoría A y B, licencias de atletas, inscripción de embarcaciones y habilitación de tráileres.</p>
      <h2>Principales valores aprobados</h2>
      <ul>
        <li>Cuota anual Clubes Categoría A: $150.000</li>
        <li>Cuota anual Clubes Categoría B: $75.000</li>
        <li>Licencia federativa por atleta: $12.000</li>
        <li>Inscripción por embarcación: $8.000</li>
        <li>Habilitación de tráiler: $5.000</li>
      </ul>
      <p>Los pagos deberán realizarse mediante transferencia bancaria a la cuenta oficial de AARA (ICBC, CBU 0150826802000101789549, alias AARA.TESORERIA.ADMIN). El comprobante deberá enviarse a tesorería@remoargentina.org para su acreditación.</p>
      <p>Para consultas, comunicarse con la Tesorería durante el horario de atención: lunes, miércoles y viernes de 9 a 12 h al (011) 4152-5775.</p>
    `,
  },
  {
    slug: "calendario-regatas-2026",
    fecha: "19 Dic 2024",
    categoria: "Calendario",
    titulo: "Ya está disponible el calendario de regatas 2026",
    resumen: "El calendario oficial de regatas para la temporada 2026 ya está publicado. Consultá todas las fechas, sedes y modalidades de cada competencia.",
    imagen: "",
    contenido: `
      <p>La AARA publicó el calendario oficial de regatas para la temporada 2026. El documento fue aprobado por la Comisión Directiva y contempla todas las competencias nacionales, regionales e internacionales programadas para el año.</p>
      <p>La temporada comenzará en el mes de marzo con la Regata Oficial Carrizal, organizada por el CRICO en el Lago del Parque Carrizal, Mendoza. El punto culminante del año será el Campeonato Argentino de Remo (CAR 2026), previsto para el mes de octubre en la Pista Nacional de Remo de Tigre.</p>
      <h2>Fechas destacadas</h2>
      <ul>
        <li><strong>6 de marzo:</strong> Regata Oficial Carrizal — Mendoza</li>
        <li><strong>Abril:</strong> Regata Regional Litoral</li>
        <li><strong>Julio:</strong> Copa de Invierno</li>
        <li><strong>Octubre:</strong> Campeonato Argentino de Remo (CAR 2026) — Tigre</li>
        <li><strong>Noviembre:</strong> Regata de Clausura</li>
      </ul>
      <p>El calendario completo con horarios, sedes y reglamentación específica de cada evento está disponible en la sección Biblioteca del sitio. Se recomienda a los clubes revisar las fechas de inscripción con anticipación.</p>
    `,
  },
  {
    slug: "remo-costero-olimpico",
    fecha: "10 Dic 2024",
    categoria: "Institucional",
    titulo: "El remo costero, a un paso del olimpismo",
    resumen: "La disciplina de remo costero avanza en su proceso de reconocimiento olímpico para los Juegos de Los Ángeles 2028. La AARA apoya activamente esta iniciativa.",
    imagen: "",
    contenido: `
      <p>El remo costero (coastal rowing) atraviesa uno de los momentos más importantes de su historia. La Federación Internacional de Remo (World Rowing) presentó ante el Comité Olímpico Internacional (COI) la candidatura formal de la disciplina para integrar el programa de los Juegos Olímpicos de Los Ángeles 2028.</p>
      <p>El remo costero se practica en aguas abiertas con embarcaciones diseñadas para condiciones marítimas, a diferencia del remo de agua tranquila que se disputa en los Juegos desde 1900. La modalidad tiene presencia activa en más de 40 países y cuenta con un Campeonato Mundial propio desde 2019.</p>
      <h2>Posición de la AARA</h2>
      <p>La Asociación Argentina de Remeros Aficionados expresó su apoyo a la candidatura olímpica del remo costero mediante una carta formal dirigida a World Rowing. Desde la entidad se entiende que la incorporación de esta disciplina ampliaría el universo del remo y captaría nuevas generaciones de deportistas.</p>
      <p>Argentina cuenta con atletas con experiencia en remo costero y condiciones naturales propicias para el desarrollo de la disciplina, especialmente en la costa bonaerense y patagónica.</p>
      <p>La decisión final del COI respecto a la inclusión o exclusión de deportes en Los Ángeles 2028 se espera para el primer semestre de 2025.</p>
    `,
  },
  {
    slug: "resultados-car-2024",
    fecha: "28 Nov 2024",
    categoria: "Competencia",
    titulo: "Resultados del CAR 2024 — Campeones nacionales",
    resumen: "Se disputó el Campeonato Argentino de Remo 2024 en Tigre. Conocé todos los resultados y los campeones nacionales en cada categoría.",
    imagen: "",
    contenido: `
      <p>Entre los días 30 de octubre y 3 de noviembre de 2024 se disputó el Campeonato Argentino de Remo (CAR 2024) en la Pista Nacional de Remo de Tigre, con la participación de más de 40 clubes de todo el país.</p>
      <p>La edición 2024 contó con condiciones climáticas favorables y una alta participación en todas las categorías, desde Menor hasta Senior, tanto en la modalidad masculina como femenina.</p>
      <h2>Síntesis de campeones</h2>
      <ul>
        <li><strong>Single Senior Masculino:</strong> Club Náutico Zárate</li>
        <li><strong>Single Senior Femenino:</strong> Buenos Aires Rowing Club</li>
        <li><strong>Doble par Junior Masculino:</strong> Club de Regatas La Marina</li>
        <li><strong>Ocho Senior Masculino:</strong> Tigre Boat Club</li>
        <li><strong>Cuádruple par Junior Femenino:</strong> Club Mendoza de Regatas</li>
      </ul>
      <p>La clasificación general por clubes coronó al Buenos Aires Rowing Club como el club más ganador de la edición, seguido por el Club Náutico Zárate y el Tigre Boat Club.</p>
      <p>Los resultados completos de todas las pruebas están disponibles en la sección Resultados del sitio y en el sistema oficial de resultados de la AARA.</p>
    `,
  },
  {
    slug: "curso-arbitros-2024",
    fecha: "15 Oct 2024",
    categoria: "Formación",
    titulo: "Curso de capacitación para árbitros — Inscripciones abiertas",
    resumen: "AARA abre inscripciones para el curso de formación y actualización de árbitros. El curso se dictará de forma presencial y virtual.",
    imagen: "",
    contenido: `
      <p>La Asociación Argentina de Remeros Aficionados (AARA) convoca a todos los interesados en formarse como árbitros de remo a participar del curso de capacitación y actualización que se llevará a cabo entre noviembre y diciembre de 2024.</p>
      <p>El programa está dirigido tanto a quienes desean obtener su habilitación por primera vez como a árbitros en actividad que necesiten actualizar sus conocimientos reglamentarios conforme a las últimas modificaciones de World Rowing.</p>
      <h2>Modalidad y contenidos</h2>
      <ul>
        <li>Módulo teórico virtual: reglamento de competencia, señales y comunicaciones, gestión de incidentes</li>
        <li>Módulo práctico presencial: jornada en la Pista Nacional de Remo, Tigre</li>
        <li>Evaluación final: teórica y práctica</li>
      </ul>
      <h2>Requisitos e inscripción</h2>
      <p>Los postulantes deben ser mayores de 18 años y estar afiliados a un club integrante de la AARA. La inscripción es gratuita para árbitros en actividad y tiene un arancel de $5.000 para nuevos postulantes.</p>
      <p>Las inscripciones se realizan enviando un correo a arbitros@remoargentina.org con nombre completo, club y número de DNI antes del 31 de octubre de 2024.</p>
    `,
  },
  {
    slug: "mundial-2024",
    fecha: "03 Sep 2024",
    categoria: "Internacional",
    titulo: "Delegación argentina en el Campeonato Mundial de Remo",
    resumen: "La delegación argentina participó del Mundial de Remo con destacadas actuaciones en las categorías junior y senior.",
    imagen: "",
    contenido: `
      <p>La delegación argentina de remo participó del Campeonato Mundial de Remo organizado por World Rowing en el mes de septiembre de 2024, con representantes en las categorías Junior, Sub-23 y Senior.</p>
      <p>Argentina presentó un total de 12 atletas distribuidos en 8 botes, abarcando modalidades de single, doble par y cuádruple par. La delegación viajó con el apoyo de la AARA y la Secretaría de Deportes de la Nación.</p>
      <h2>Actuaciones destacadas</h2>
      <p>En la categoría Junior, el equipo de cuádruple par masculino alcanzó la final B, obteniendo una destacada actuación considerando el nivel competitivo internacional. En la categoría Senior, el single femenino clasificó a las semifinales, lo que representa uno de los mejores resultados de Argentina en esa prueba en los últimos años.</p>
      <p>El entrenador nacional destacó el crecimiento del equipo y la importancia de la experiencia internacional para la proyección de los atletas de cara a los próximos ciclos olímpicos.</p>
      <h2>Próximos objetivos</h2>
      <p>Con la vista puesta en los Juegos Olímpicos de Los Ángeles 2028, la AARA y la Confederación Argentina de Deportes Acuáticos (CADA) trabajan en conjunto en un plan de desarrollo de alto rendimiento para identificar y potenciar a los talentos nacionales.</p>
    `,
  },
];
