const ramos = [
  {
    id: "bioquimica",
    nombre: "Bioquímica",
    creditos: 10,
    requisitos: ["bio_microorganismos", "quimica_organica_ii"],
  },
  {
    id: "quimica_organica_ii",
    nombre: "Química Orgánica II",
    creditos: 10,
    requisitos: ["quimica_organica_i"],
  },
  {
    id: "quimica_organica_i",
    nombre: "Química Orgánica I",
    creditos: 10,
    requisitos: ["quimica_general_ii"],
  },
  {
    id: "quimica_general_ii",
    nombre: "Química General II",
    creditos: 10,
    requisitos: ["quimica_general_i", "lab_quimica_general"],
  },
  {
    id: "quimica_general_i",
    nombre: "Química General I",
    creditos: 10,
    requisitos: [],
  },
  {
    id: "lab_quimica_general",
    nombre: "Lab. Química General",
    creditos: 10,
    requisitos: [],
  },
  {
    id: "bio_microorganismos",
    nombre: "Biología de los Microorganismos",
    creditos: 10,
    requisitos: ["biologia_celula"],
  },
  {
    id: "biologia_celula",
    nombre: "Biología de la Célula",
    creditos: 10,
    requisitos: [],
  }
];

let creditosTotales = 0;
const creditosSpan = document.getElementById("creditos");
const malla = document.getElementById("malla");

function actualizarCreditos() {
  creditosSpan.textContent = creditosTotales;
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = ramo.id;
  div.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
  div.addEventListener("click", () => aprobarRamo(ramo));
  malla.appendChild(div);
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

// Inicializa la malla
ramos.forEach((r) => crearRamo(r));

// Desbloquea los que no tienen requisitos
ramos.forEach((r) => {
  if (r.requisitos.length === 0) {
    document.getElementById(r.id).classList.remove("bloqueado");
  }
});
