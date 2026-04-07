export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

    const guion =
      "Esto fue detectado...\n" +
      "y no deberías estar viendo esto.\n\n" +
      "Todo comenzó con " + tema + ".\n" +
      "Nadie lo tomó en serio.\n" +
      "Pero algo no estaba bien.\n\n" +
      "Las imágenes eran extrañas.\n" +
      "Y mientras más investigaban...\n" +
      "más inquietante se volvía.\n\n" +
      "Lo peor no fue encontrarlo.\n" +
      "Fue entender que esto podría ser real.\n\n" +
      "Si esto apareciera frente a ti...\n" +
      "¿te quedarías o correrías?";

    return res.status(200).json({ resultado: guion });

  } catch (error) {
    return res.status(500).json({ resultado: "Error en el servidor" });
  }
}