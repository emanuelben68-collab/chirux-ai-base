export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
   const { tema, categoria, estilo } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }
const contexto = `Tema: ${tema}
Categoría: ${categoria}
Estilo: ${estilo}`;
    let hooks = [];

if (categoria === "misterio") {
  hooks = [
    "Esto no debía ser visto...",
    "Alguien filtró esto... y luego desapareció.",
    "Esto fue encontrado... y nadie lo explicó."
  ];
} 

else if (categoria === "gaming") {
  hooks = [
    "Esto pasó dentro del juego… pero no debería existir.",
    "Un jugador encontró esto… y el juego cambió.",
    "Esto no es un bug… es algo más."
  ];
}

else if (categoria === "comida") {
  hooks = [
    "Esto parece normal… pero puede ser peligroso.",
    "Lo comes todos los días… pero nadie te dijo esto.",
    "Esto está en tu comida… y no lo sabías."
  ];
}

else if (categoria === "motivacion") {
  hooks = [
    "Esto puede cambiar tu vida en segundos.",
    "Nadie te dice esto… pero es la verdad.",
    "Si haces esto… todo cambia."
  ];
}

else {
  hooks = [
    "Esto no es normal...",
    "Algo extraño está pasando...",
    "Nadie esperaba esto..."
  ];
}

let desarrollos = [];

if (estilo === "viral") {
  desarrollos = [
    `Todo comenzó con ${tema}. Nadie sospechaba nada.`,
    `Pero algo no estaba bien.`,
    `Y lo que encontraron después…`,
    `cambió todo.`
  ];
}

else if (estilo === "oscuro") {
  desarrollos = [
    `Todo comenzó con ${tema}… pero algo se sentía mal.`,
    `El ambiente era pesado.`,
    `Nadie podía explicarlo.`,
    `Y lo que vino después… no debía existir.`
  ];
}

else if (estilo === "documental") {
  desarrollos = [
    `El caso de ${tema} ha generado múltiples teorías.`,
    `Expertos han intentado explicarlo.`,
    `Sin embargo, hay inconsistencias.`,
    `Y hasta hoy… sigue sin resolverse.`
  ];
}

else if (estilo === "emocional") {
  desarrollos = [
    `Todo comenzó con ${tema}… y nadie imaginaba lo que venía.`,
    `Las emociones comenzaron a cambiar.`,
    `Todo se volvió intenso.`,
    `Y nada volvió a ser igual.`
  ];
}

else {
  desarrollos = [
    `Todo comenzó con ${tema}.`,
    `Algo extraño pasó.`,
    `Nadie lo esperaba.`,
    `Y todo cambió.`
  ];
}

const giros = [
  "Las imágenes no coincidían.",
  "Los sensores comenzaron a fallar.",
  "Algo empezó a responder.",
  "Se escucharon sonidos extraños.",
  "Las cosas empezaron a moverse.",
  "Nada tenía sentido.",
  "Todo se volvió inestable.",
  "Los registros desaparecieron.",
  "Las luces comenzaron a fallar.",
  "Algo no quería ser visto."
];

const cierres = [
  "Y nadie volvió a hablar de eso.",
  "Y lo ocultaron inmediatamente.",
  "Y lo que pasó después fue peor.",
  "Y hasta hoy sigue sin explicación.",
  "Y nunca debió salir a la luz.",
  "Y lo eliminaron de todos lados.",
  "Y nadie quiso investigarlo más.",
  "Y lo que descubrieron fue aterrador.",
  "Y no hay registro oficial de esto.",
  "Y todo quedó en silencio."
];

const guiones = Array.from({ length: 10 }, (_, i) => `
GUION ${i + 1}:

HOOK:
${hooks[i]}

GUION:
${desarrollos[i].replace("${tema}", tema)}
${giros[i]}
Y lo que encontraron después...
no debería existir.
${cierres[i]}

DESCRIPCIÓN:
Esto sigue sin explicación. ¿Tú qué harías si esto fuera real?

HASHTAGS:
#misterio #viral #curiosidades #shorts #tiktok
`).join("\n\n---------------------\n\n");

return res.status(200).json({ resultado: guiones });

    return res.status(200).json({ resultado: guiones });
  } catch (error) {
    return res.status(500).json({ resultado: "Error en el servidor" });
  }
}