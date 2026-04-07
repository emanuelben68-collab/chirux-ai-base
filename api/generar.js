export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

  const guiones = Array.from({ length: 10 }, (_, i) => `
GUION ${i + 1}:

HOOK:
Esto fue detectado... y no deberías estar viendo esto.

GUION:
Todo comenzó con ${tema}.
Nadie lo tomó en serio.
Pero algo no estaba bien.
Y lo que encontraron después...
no debería existir.

DESCRIPCIÓN:
Un caso extraño que sigue dejando preguntas. ¿Tú qué harías si esto fuera real?

HASHTAGS:
#misterio #viral #curiosidades #shorts #tiktok
`).join("\n\n---------------------\n\n");

    return res.status(200).json({ resultado: guion });

  } catch (error) {
    return res.status(500).json({ resultado: "Error en el servidor" });
  }
}