export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

   const guion = "Esto fue detectado...\n" +
"y no deberías estar viendo esto.\n\n" +
"Todo comenzó con " + tema + ".\n" +
"Nadie lo tomó en serio al principio.\n" +
"Pero algo no cuadraba.\n\n" +
"Las imágenes eran extrañas.\n" +
"Los detalles no tenían explicación clara.\n" +
"Y mientras más lo investigaban...\n" +
"más inquietante se volvía.\n\n" +
"Lo peor no fue encontrarlo.\n" +
"Lo peor fue entender que " + tema + " podría ser real.\n\n" +
"Si esto apareciera frente a ti...\n" +
"¿te quedarías a mirar o saldrías corriendo?";
  } catch (error) {
    return res.status(500).json({ resultado: "Hubo un error generando el guion." });
  }
}