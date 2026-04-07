# Chirux AI — código base v1

Este proyecto es una base funcional en **Expo + React Native + TypeScript** para tu app **Chirux AI**.

## Qué incluye

- Pantalla de inicio
- Pantalla para crear contenido
- Pantalla de resultados
- Historial local en memoria
- Pantalla Pro
- Servicio mock para simular la generación IA

## Cómo correrlo

1. Instala Node.js
2. Instala Expo CLI si hace falta:

```bash
npm install -g expo
```

3. Entra al proyecto:

```bash
cd chirux-ai-base
```

4. Instala dependencias:

```bash
npm install
```

5. Inicia la app:

```bash
npm start
```

Después puedes abrirla en:
- Android
- iPhone
- Web

## Estructura

- `App.tsx` → flujo principal
- `src/screens` → pantallas
- `src/components` → componentes reutilizables
- `src/services/aiService.ts` → integración IA (por ahora mock)
- `src/theme/colors.ts` → colores base

## Siguiente paso recomendado

1. Conectar backend propio
2. Llamar a OpenAI desde backend
3. Guardar historial en Firebase
4. Agregar login
5. Conectar cobros con Stripe o RevenueCat

## Nota importante

Ahora mismo la app **sí funciona como demo**, pero la generación es simulada.
Para monetizarla de verdad, el siguiente paso es conectar el generador real por API.
