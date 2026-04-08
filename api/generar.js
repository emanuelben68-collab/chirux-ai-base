export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

    const hooks = [
  "Esto no debía ser visto...",
  "Alguien filtró esto… y luego desapareció.",
  "Esto fue encontrado… y nadie lo explicó.",
  "Lo grabaron… pero no debían hacerlo.",
  "Esto apareció de la nada.",
  "Nadie sabe quién lo dejó ahí.",
  "Esto estuvo oculto durante años.",
  "Lo encontraron… pero era demasiado tarde.",
  "Esto no es normal…",
  "Si ves esto completo… ya es tarde."
];

const desarrollos = [
  "Todo comenzó con ${tema}. Nadie sospechaba nada.",
  "Al principio parecía normal… pero algo cambió.",
  "Todo empezó como un simple descubrimiento.",
  "No parecía peligroso… hasta que lo fue.",
  "Todo era tranquilo… hasta ese momento.",
  "Nadie imaginaba lo que venía después.",
  "Parecía insignificante… pero no lo era.",
  "Todo comenzó sin explicación.",
  "Nadie prestó atención al inicio.",
  "Todo parecía bajo control… al principio."
];

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