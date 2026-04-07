import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const { tema, duracion, estilo, plataforma } = req.body;

    const prompt = `
Crea contenido viral para ${plataforma}.

Tema: ${tema}
Duración: ${duracion}
Estilo: ${estilo}

Devuelve:
- Título
- Gancho
- Guion
- Descripción
- Hashtags
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({
      resultado: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generando contenido" });
  }
}