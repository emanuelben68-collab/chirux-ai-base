export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ resultado: "Método no permitido" });
  }

  try {
    const { tema } = req.body;

    if (!tema) {
      return res.status(400).json({ resultado: "Escribe un tema primero." });
    }

   const guion = "Gancho: Esto que te voy a contar sobre " + tema + " parece inventado… pero podría volverse viral.\n\nDesarrollo: Primero muestras una imagen fuerte, luego explicas el misterio o dato más impactante sobre" + tema + ", y después aumentas la tensión con una pregunta que deje pensando.\n\nCierre: ¿Te gustaría que te haga una versión más intensa para TikTok o Shorts?";
    return res.status(200).json({ resultado: guion });
  } catch (error) {
    return res.status(500).json({ resultado: "Hubo un error generando el guion." });
  }
}