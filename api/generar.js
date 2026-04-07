export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

   const guion = `
Esto fue detectado...

y no deberías estar viendo esto.

Todo comenzó con ${tema}.

Al principio...
nadie lo tomó en serio.

Pero algo no estaba bien.

Las imágenes eran extrañas.

Y mientras más investigaban...

más oscuro se volvía todo.

Hasta que alguien desapareció.

Y lo que encontraron después...

no debería existir.

¿Tú qué harías si esto fuera real?
`;
    return res.status(200).json({ resultado: guion });

  } catch (error) {
    return res.status(500).json({ resultado: "Error en el servidor" });
  }
}