import { GenerationInput, GenerationResult } from '../types';

function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function generateViralContent(input: GenerationInput): Promise<GenerationResult> {
  await fakeDelay(1200);

  const title = `Lo que encontraron sobre ${input.topic} dejó a todos sin explicación`;
  const hook = `Esto sobre ${input.topic} no debería estar saliendo ahora... y lo más raro es que sí fue registrado.`;
  const script = `Esto no parece normal.

Todo comenzó con ${input.topic}.
Al principio parecía un caso más.
Pero algo no encajaba.

Los datos eran reales.
Las señales estaban ahí.
Y mientras más investigaban,
más preguntas aparecían.

Nadie esperaba ese hallazgo.
Nadie pudo explicarlo del todo.
Y cuando parecía que todo había terminado...
apareció un detalle peor.

Ahora la pregunta es otra:
¿qué más falta por descubrir?`;
  const description = `Esto sí pasó y sigue dejando preguntas.
¿Tú qué crees que realmente encontraron?`;
  const hashtags = '#misterio #datoscuriosos #viral #historias #shorts #parati #curiosidades';
  const visualIdea = `Usa imágenes oscuras, acercamientos lentos, texto grande en pantalla y cambios de escena cada 2 o 3 segundos. Cierra con una imagen impactante relacionada con ${input.topic}.`;

  return {
    id: String(Date.now()),
    topic: input.topic,
    duration: input.duration,
    style: input.style,
    platform: input.platform,
    title,
    hook,
    script,
    description,
    hashtags,
    visualIdea,
    createdAt: new Date().toLocaleString(),
  };
}

/*
Próximo paso: reemplaza la función mock por una llamada real a OpenAI.

Ejemplo conceptual:

export async function generateViralContent(input: GenerationInput): Promise<GenerationResult> {
  const response = await fetch('https://TU_BACKEND.com/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error('No se pudo generar el contenido');
  }

  return response.json();
}

Importante:
- No metas la API key directa en la app.
- Usa backend propio o una función serverless.
*/
