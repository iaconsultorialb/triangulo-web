# Arranque de implementacion en Google Antigravity

Estado: guia inicial de construccion  
Ultima revision: 2026-08-17  
Uso principal: primer prompt y plan tecnico para iniciar el repo vacio en Google Antigravity.

## 1. Por donde comenzar

El primer objetivo no es disenar toda la web completa. El primer objetivo es construir una base navegable, elegante y escalable que ya exprese el salto de valor de El Triangulo.

Primera entrega recomendada:

- Home completa en version responsive.
- Estructura visual alineada a marca.
- Secciones principales ya ordenadas.
- Assets placeholders con nombres definitivos.
- Primer bloque de masterplan preparado para evolucionar a interaccion por scroll.
- CTAs comerciales segmentados.

No arrancar todavia por:

- Selector real de lotes.
- Disponibilidad conectada a planilla.
- Animacion compleja final del masterplan.
- Calculadoras financieras.
- Formularios avanzados.

Eso viene despues de tener una base visual y narrativa fuerte.

## 2. Stack recomendado

Para el repo vacio en Antigravity:

- Next.js con App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion para transiciones y scroll progresivo.
- Lucide React para iconos.
- Componentes propios simples, sin framework visual pesado.

Motivo:

- Next.js permite buena performance, SEO y estructura de paginas.
- Tailwind acelera layout sin encerrarnos en un sistema generico.
- Framer Motion es suficiente para el scroll narrativo del masterplan si lo planteamos con CSS sticky y estados progresivos.
- Lucide cubre iconografia limpia sin inventar SVGs manuales.

## 3. Estructura inicial de paginas

Primera etapa:

- `/` Home.
- `/masterplan` experiencia del masterplan.
- `/lotes` producto activo.
- `/centro-comercial` oportunidad comercial.
- `/ubicacion` accesos y entorno.
- `/contacto` conversion.

Segunda etapa:

- `/townhouses`
- `/condominios`
- `/avances`
- `/historia`
- `/faq`

## 4. Estructura recomendada de carpetas

```txt
src/
  app/
    page.tsx
    masterplan/page.tsx
    lotes/page.tsx
    centro-comercial/page.tsx
    ubicacion/page.tsx
    contacto/page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      WhatsAppButton.tsx
    home/
      Hero.tsx
      KeyFacts.tsx
      InterestSelector.tsx
      ProductOverview.tsx
      MasterplanPreview.tsx
      LocationPreview.tsx
      FinalCTA.tsx
    masterplan/
      ScrollMasterplan.tsx
      MasterplanMap.tsx
      MasterplanPanel.tsx
    ui/
      Button.tsx
      Section.tsx
      ProductCard.tsx
  data/
    site.ts
    products.ts
    masterplan.ts
  lib/
    whatsapp.ts
public/
  assets/
    triangulo/
      hero-aerea-masterplan.jpg
      hero-natural-urbano.webm
      masterplan-base.svg
      centro-comercial-plaza.jpg
      centro-comercial-fachada.jpg
      lotes-drone-actual.jpg
      condominios-render-01.jpg
```

## 5. Sistema visual base

Colores de marca:

- Verde principal: `#016241`
- Verde oscuro: `#284339`
- Fondo calido: `#F4F3EA`
- Verde claro/acento: `#DFF9BA`

Direccion visual:

- Fondo claro calido como base.
- Verde oscuro para navegacion, textos fuertes y footer.
- Verde principal para CTAs.
- Verde claro solo como acento, no como color dominante.
- Imagenes grandes, limpias y con poco texto encima.
- Layout editorial sobrio: mas inmobiliario premium-natural, menos landing generica.

Tipografia:

- Marca original: Brandon Grotesque.
- Si no esta disponible al inicio, usar una alternativa temporal: `Inter`, `Avenir Next` o `Montserrat`.
- Luego reemplazar por Brandon Grotesque si se cuenta con licencia/webfont.

## 6. Home version 1

Orden recomendado:

1. Header fijo sobrio.
2. Hero con imagen/video del proyecto.
3. Franja de datos clave.
4. Selector de interes.
5. Masterplan preview.
6. Productos del desarrollo.
7. Centro comercial destacado.
8. Ubicacion y accesos.
9. Avances / obra real.
10. CTA final.

### Hero

Mensaje recomendado:

```txt
El Triangulo de Open Door
Naturaleza, vivienda y servicios en un masterplan urbano-natural de 17 hectareas.
```

CTA principal:

```txt
Consultar disponibilidad
```

CTA secundario:

```txt
Explorar masterplan
```

### Datos clave

Usar:

- 17 ha.
- Open Door, Lujan.
- 4 productos.
- Venta activa en lotes.

Evitar por ahora:

- Cantidad exacta de lotes hasta resolver conflicto 128 / 141 / 144.
- Fechas de lanzamientos no validadas.
- Precios si no estan actualizados comercialmente.

## 7. Masterplan version 1

La primera version debe ser una preview interactiva simple:

- Imagen o placeholder del masterplan.
- Hotspots estaticos.
- Cards para Lotes, Townhouses, Condominios, Centro Comercial, Areas verdes, Accesos.
- En desktop: mapa a la izquierda, contenido a la derecha.
- En mobile: mapa arriba, cards debajo.

Luego se transforma en experiencia tipo Andermatt:

- Sticky scroll.
- Capas activas.
- Marcadores sincronizados.
- Panel narrativo lateral.
- Skip / ver plano completo.

## 8. Prompt inicial para Antigravity

Usar este prompt en el repo vacio:

```txt
Quiero crear la nueva web de El Triangulo de Open Door, un desarrollo inmobiliario urbano-natural de uso mixto en Open Door, Lujan, Argentina.

Stack:
- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

Objetivo de esta primera version:
Crear una home responsive, elegante, sobria y comercialmente clara. No quiero una landing generica ni una pagina de marketing vacia; quiero una experiencia inmobiliaria premium-natural que explique el masterplan y conduzca a consultas.

Marca:
- Verde principal #016241
- Verde oscuro #284339
- Fondo calido #F4F3EA
- Acento verde claro #DFF9BA
- Tipografia temporal Inter o Montserrat, luego se reemplazara por Brandon Grotesque.

Tono:
Claro, moderno, confiable, urbano-natural. Premium accesible, sin exagerar lujo. Evitar frases genericas como "un lugar unico" si no aportan informacion.

Estructura de la home:
1. Header fijo con logo/nombre, navegacion y CTA.
2. Hero con imagen grande del proyecto, titulo "El Triangulo de Open Door", bajada y dos CTAs.
3. Franja de datos clave: 17 ha, Open Door Lujan, 4 productos, venta activa en lotes.
4. Selector de interes: Quiero vivir, Quiero invertir, Quiero un local, Quiero visitar.
5. Preview de masterplan interactivo con mapa/placeholder y cards por capas: Lotes, Centro Comercial, Townhouses, Condominios, Areas verdes, Accesos.
6. Productos del desarrollo con cards y CTA especifico.
7. Bloque destacado de Centro Comercial.
8. Bloque de Ubicacion y conectividad.
9. Bloque de avances/obra real.
10. CTA final segmentado con WhatsApp.

Assets:
Crear la carpeta public/assets/triangulo y usar placeholders con estos nombres:
- hero-aerea-masterplan.jpg
- hero-natural-urbano.webm
- masterplan-base.svg
- centro-comercial-plaza.jpg
- centro-comercial-fachada.jpg
- lotes-drone-actual.jpg
- condominios-render-01.jpg

Interaccion:
- Usar Framer Motion para transiciones suaves de entrada.
- Preparar el componente MasterplanPreview para que luego pueda evolucionar a ScrollMasterplan sticky inspirado en Andermatt.
- Header sticky con CTA visible.
- Boton flotante de WhatsApp.

Restricciones:
- No usar UI con cards dentro de cards.
- No hacer hero con layout partido tipo texto a un lado e imagen al otro; la imagen debe ser protagonista de primer viewport.
- No usar fondos con blobs, orbs ni gradientes decorativos genericos.
- No meter texto explicando como usar la web.
- No usar claims comerciales no validados como cantidad exacta de lotes, precios o fechas.

Entregable:
- Codigo funcionando.
- Componentes separados.
- Data centralizada en src/data/site.ts, src/data/products.ts y src/data/masterplan.ts.
- Diseño responsive cuidado para desktop y mobile.
```

## 9. Primeros criterios de aceptacion

La primera version esta bien encaminada si:

- En 5 segundos se entiende que es El Triangulo, donde esta y por que es distinto.
- El masterplan aparece como eje de experiencia, no como imagen secundaria.
- Los productos se entienden con estado comercial y CTA.
- La home se siente actual, sobria y ordenada.
- Mobile no parece una version comprimida de desktop.
- El WhatsApp esta presente pero no invade.
- No hay informacion comercial dudosa.

## 10. Siguiente paso despues de la home

Cuando la home este construida:

1. Insertar assets reales.
2. Revisar recortes y performance.
3. Crear pagina `/masterplan`.
4. Convertir `MasterplanPreview` en `ScrollMasterplan`.
5. Crear paginas de producto: `/lotes`, `/centro-comercial`, `/townhouses`, `/condominios`.
6. Afinar formularios y mensajes de WhatsApp por interes.

