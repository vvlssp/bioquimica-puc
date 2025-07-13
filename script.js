const ramos = [
  // PRIMER AÑO
  { id: "bioquimica_topicos", nombre: "Tópicos de Bioquímica", creditos: 5, requisitos: [] },
  { id: "biologia_celula", nombre: "Biología de la Célula", creditos: 10, requisitos: [] },
  { id: "lab_quimica_general", nombre: "Lab. Química General", creditos: 10, requisitos: [] },
  { id: "quimica_general_i", nombre: "Química General I", creditos: 10, requisitos: [] },
  { id: "pre_calculo", nombre: "Pre Cálculo", creditos: 10, requisitos: [] },
  { id: "filosofia", nombre: "Filosofía: ¿Para qué?", creditos: 10, requisitos: [] },

  { id: "fisica_ciencias", nombre: "Física para Ciencias", creditos: 10, requisitos: [] },
  { id: "lab_fisica", nombre: "Lab. Física para Ciencias", creditos: 0, requisitos: [] },
  { id: "quimica_general_ii", nombre: "Química General II", creditos: 10, requisitos: ["quimica_general_i", "lab_quimica_general"] },
  { id: "calculo_i", nombre: "Cálculo I", creditos: 10, requisitos: ["pre_calculo"] },
  { id: "teologico", nombre: "Teológico", creditos: 10, requisitos: [] },
  { id: "electivo_1", nombre: "Electivo", creditos: 10, requisitos: [] },

  // SEGUNDO AÑO
  { id: "bases_fisicas", nombre: "Bases Físicas de los Procesos Biológicos", creditos: 10, requisitos: ["biologia_celula", "pre_calculo", "quimica_general_i", "fisica_ciencias"] },
  { id: "bioestadistica", nombre: "Bioestadística", creditos: 10, requisitos: ["pre_calculo"] },
  { id: "quimica_organica_i", nombre: "Química Orgánica I", creditos: 10, requisitos: ["quimica_general_ii"] },
  { id: "quimica_analitica", nombre: "Química Analítica I", creditos: 10, requisitos: ["quimica_general_ii"] },
  { id: "electivo_deportivo", nombre: "Electivo Deportivo", creditos: 10, requisitos: [] },
  { id: "electivo_2", nombre: "Electivo", creditos: 10, requisitos: [] },
  { id: "electivo_3", nombre: "Electivo", creditos: 10, requisitos: [] },

  { id: "bioetica", nombre: "Bioética", creditos: 10, requisitos: ["biologia_celula"] },
  { id: "bio_microorganismos", nombre: "Biología de los Microorganismos", creditos: 10, requisitos: ["biologia_celula"] },
  { id: "quimica_organica_ii", nombre: "Química Orgánica II", creditos: 10, requisitos: ["quimica_organica_i"] },
  { id: "analisis_instrumental", nombre: "Análisis Instrumental", creditos: 10, requisitos: ["quimica_analitica"] },
  { id: "electivo_4", nombre: "Electivo", creditos: 10, requisitos: [] },
  { id: "electivo_5", nombre: "Electivo", creditos: 10, requisitos: [] },

  // TERCER AÑO
  { id: "genetica_evolucion", nombre: "Genética y Evolución", creditos: 10, requisitos: ["bioestadistica", "biologia_celula"] },
  { id: "fisiovegetal_biocel", nombre: "Fisiología y Bioquímica Vegetal o Biología y Fisiología Celular", creditos: 10, requisitos: ["bases_fisicas", "bio_microorganismos"] },
  { id: "bioquimica", nombre: "Bioquímica", creditos: 10, requisitos: ["quimica_organica_ii", "bio_microorganismos"] },
  { id: "lab_bioq_i", nombre: "Lab. Bioquímica I; Biología Celular", creditos: 5, requisitos: ["quimica_organica_ii", "analisis_instrumental"] },
  { id: "lab_q_organica", nombre: "Lab. Química Orgánica", creditos: 10, requisitos: ["quimica_organica_ii"] },

  { id: "genetica_molecular", nombre: "Genética Molecular", creditos: 10, requisitos: ["bioquimica"] },
  { id: "lab_bioq_ii", nombre: "Lab. Bioquímica II Genética Molecular", creditos: 10, requisitos: ["bioquimica", "lab_bioq_i"] },
  { id: "fisiologia", nombre: "Fisiología", creditos: 10, requisitos: ["bioquimica", "bases_fisicas"] },
  { id: "lab_fisiologia", nombre: "Laboratorio de Fisiología", creditos: 5, requisitos: ["fisiologia"] },
  { id: "quimica_fisica_i", nombre: "Química Física I", creditos: 10, requisitos: [] },

  // CUARTO AÑO
  { id: "quimica_fisica_ii", nombre: "Química Física II", creditos: 10, requisitos: ["quimica_fisica_i"] },
  { id: "optativos_lic", nombre: "Optativos Profundización Licenciatura", creditos: 35, requisitos: [] },
  { id: "opr_experiencia", nombre: "OPR Experiencia de Investigación", creditos: 15, requisitos: ["lab_bioq_i"] },
  { id: "seminario_practica", nombre: "Seminario de Investigación o Práctica Extramural", creditos: 30, requisitos: ["lab_bioq_ii", "fisiologia", "lab_fisiologia", "opr_experiencia"] },
  { id: "lab_clinico", nombre: "Laboratorio Clínico", creditos: 10, requisitos: ["lab_bioq_ii"] },

  // QUINTO AÑO
  { id: "tecnicas_avanzadas", nombre: "Técnicas Avanzadas en Bioquímica", creditos: 50, requisitos: [] },
  { id: "optativos_titulo", nombre: "Optativos de Profundización Título", creditos: 50, requisitos: [] },
  { id: "memoria_investigacion", nombre: "Memoria de Investigación", creditos: 50, requisitos: [] },
  { id: "memoria_profesional", nombre: "Memoria Profesional", creditos: 50, requisitos: [] }
];

let creditosTotales = 0;
const creditosSpan = document.getElementById("creditos");
const malla = document.getElementById("malla");

function actualizarCreditos() {
  creditosSpan.textContent = creditosTotales;
}

function crearRamo(ramo) {
  const div = document.getElementById(ramo.id);
  if (!div) return;
  div.classList.add("bloqueado");
  div.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
  div.addEventListener("click", () => aprobarRamo(ramo));
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.id);
  if (div.classList.contains("bloqueado")) return;
  if (div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");
  creditosTotales += ramo.creditos;
  actualizarCreditos();
  desbloquearRamosDependientes(ramo.id);
}

function desbloquearRamosDependientes(idAprobado) {
  ramos.forEach((r) => {
    if (
      r.requisitos.includes(idAprobado) &&
      !document.getElementById(r.id).classList.contains("aprobado")
    ) {
      const todosAprobados = r.requisitos.every((req) =>
        document.getElementById(req).classList.contains("aprobado")
      );
      if (todosAprobados) {
        document.getElementById(r.id).classList.remove("bloqueado");
      }
    }
  });
}

ramos.forEach((r) => crearRamo(r));
ramos.forEach((r) => {
  if (r.requisitos.length === 0) {
    document.getElementById(r.id).classList.remove("bloqueado");
  }
});
