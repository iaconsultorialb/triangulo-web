# Referencia UX - Andermatt para transiciones y masterplan

Estado: referencia de interaccion y direccion visual  
Fuente: https://andermatt-realestate.ch/real-estate/  
Ultima revision: 2026-08-17

## 1. Proposito de la referencia

Esta referencia se usa para estudiar transiciones, ritmo de scroll y comportamiento del masterplan. No debe copiarse literalmente el diseno, la marca ni los contenidos de Andermatt.

Objetivo para El Triangulo:

> Adaptar la logica de exploracion guiada por scroll a un masterplan triangular, con capas por producto, puntos de interes y narrativa comercial segmentada.

## 2. Lo que funciona en Andermatt

Andermatt organiza su pagina Real Estate con una experiencia de scroll donde el masterplan funciona como pieza inmersiva. La pagina combina:

- Header fijo y minimalista.
- Subnavegacion fija por secciones.
- Bloque hero sobrio.
- Modulo de masterplan con invitacion explicita a scrollear.
- Mapa fijo/sticky a pantalla completa.
- Panel narrativo lateral que cambia con el scroll.
- Marcadores activos que cambian de color.
- Navegacion interna del modulo: `Amenities`, `Properties`, `Skip`.
- Transicion posterior hacia secciones editoriales tradicionales: approach, design, services, portfolio, sustainability y B2B.

Lectura tecnica observada:

- La experiencia usa una estructura tipo `LottieMap`.
- El mapa queda en posicion `sticky`.
- El contenido del mapa tambien queda sticky mientras el usuario scrollea.
- El panel derecho avanza verticalmente con fichas de amenities/properties.
- El marcador activo del mapa se sincroniza con el bloque visible del panel.
- El usuario puede saltear la experiencia con `Skip`.

## 3. Patron de interaccion recomendado para El Triangulo

### Estructura general

La experiencia de masterplan de El Triangulo deberia funcionar como un recorrido guiado:

1. Entrada al masterplan con plano triangular completo.
2. Texto: "Explora el masterplan".
3. Estadisticas base del proyecto.
4. Scroll narrativo por capas.
5. Cierre con CTA segmentado.

### Layout desktop recomendado

- Columna izquierda: masterplan triangular sticky.
- Columna derecha: panel de contenido con etapas/fichas.
- Barra inferior o lateral: tabs del recorrido.
- Marcadores visibles sobre el plano.

Proporcion sugerida:

- Mapa: 55-60% del ancho.
- Panel narrativo: 40-45% del ancho.
- Altura del modulo: 400-600vh para permitir recorrido por scroll.

### Layout mobile recomendado

- Mapa sticky arriba durante tramos cortos.
- Paneles debajo en cards verticales.
- Marcador activo visible en el mapa.
- Boton para abrir "ver plano completo".
- Evitar forzar animacion pesada si compromete performance.

## 4. Capas del masterplan para El Triangulo

Tabs internas recomendadas:

- Vision general.
- Vivienda.
- Servicios.
- Espacios verdes.
- Inversion.

Capas visuales:

- Lotes unifamiliares.
- Townhouses / bifamiliares.
- Multifamiliar / condominios.
- Centro comercial.
- YPF / servicios.
- Plazas y areas verdes.
- Accesos y circulacion.

## 5. Secuencia de scroll propuesta

### Frame 1 - Vision general

Visual:

- Plano completo del triangulo.
- Todas las zonas en color suave.
- Estadisticas alrededor: 17 ha, Open Door, uso mixto, venta activa en lotes.

Texto:

- "Un desarrollo urbano-natural en Open Door".
- Bajada: vivienda, servicios, comercio y espacios verdes dentro de un mismo masterplan.

CTA suave:

- "Conocer el proyecto".

### Frame 2 - Lotes residenciales

Visual:

- Se iluminan sectores de lotes unifamiliares.
- El resto del plano queda atenuado.

Texto:

- Lotes desde 450 m2.
- Venta activa.
- Seguridad electronica.
- Bajos costos de mantenimiento.

CTA:

- "Consultar lotes disponibles".

### Frame 3 - Centro comercial / pueblito suburbano

Visual:

- Se iluminan zonas comerciales C1, C2, C3/C4.
- Aparecen iconos de gastronomia, salud, coworking, gimnasio, tiendas y servicios.

Texto:

- 15.000 m2 totales.
- Mas de 9.000 m2 construidos.
- 280 metros de frente comercial.
- YPF Full operativa como ancla.

CTA:

- "Consultar oportunidades comerciales".

### Frame 4 - Plazas y vida publica

Visual:

- Se iluminan areas verdes, plazas y recorridos peatonales.
- Animacion sutil de senderos/circuitos.

Texto:

- Pueblo caminable.
- Plazas, encuentro, bienestar y escala humana.
- Ciudad de 5/15 minutos como concepto a validar/comunicar.

CTA:

- "Ver ubicacion y entorno".

### Frame 5 - Townhouses

Visual:

- Se ilumina sector de bifamiliares.

Texto:

- Duplex de 140 m2.
- Jardin privado.
- Llave en mano.
- Venta inactiva / lanzamiento a validar.

CTA:

- "Recibir novedades".

### Frame 6 - Condominios

Visual:

- Se iluminan sectores multifamiliares.

Texto:

- Unidades de 1, 2 y 3 dormitorios.
- Jardin central, cocheras, seguridad electronica.
- Amenities propios del condominio.

CTA:

- "Inscribirme a preventa".

### Frame 7 - Accesos e infraestructura

Visual:

- Se resaltan Ruta 192, Av. Juan de Dios Filiberto, acceso central, garita, acceso de servicio y bulevar.

Texto:

- Ubicacion estrategica.
- Entre Lujan y Pilar.
- Aprox. 50 minutos de CABA.
- Infraestructura: LED, fibra, seguridad, gas, agua, cloacas/biodigestores a validar por etapa.

CTA:

- "Agendar visita".

### Frame 8 - Cierre comercial

Visual:

- Vuelve el plano completo.
- Marcadores activos quedan visibles.

Texto:

- "Elegí cómo querés ser parte de El Triangulo".

CTAs:

- "Quiero vivir".
- "Quiero invertir".
- "Quiero un local".
- "Quiero visitar".

## 6. Transiciones recomendadas

Usar:

- Pin/sticky del plano durante el recorrido.
- Crossfade entre capas del mapa.
- Zoom suave hacia sectores activos.
- Marcadores con cambio de color y escala.
- Paneles de texto que entran con fade + translate vertical leve.
- Fotos/renders que aparecen dentro del panel, no tapando el mapa.
- Barra de progreso del recorrido.
- Boton `Saltar recorrido` para usuarios que quieran ir directo al contenido.

Evitar:

- Animaciones demasiado largas.
- Scroll hijacking agresivo.
- Mapas que no puedan usarse en mobile.
- Efectos pesados que bloqueen el contacto comercial.
- Exceso de hotspots simultaneos.
- Textos largos dentro del modulo animado.

## 7. Direccion visual adaptada a El Triangulo

Andermatt usa un mapa claro, gris/verde, con lineas blancas, marcadores sobrios y panel editorial. Para El Triangulo conviene adaptar:

- Fondo crema `#F4F3EA`.
- Verde principal `#016241`.
- Verde oscuro `#284339`.
- Acento claro `#DFF9BA`.
- Colores por capa derivados del brochure:
  - Lotes unifamiliares: tierra / marron claro.
  - Townhouses: turquesa/verde azulado.
  - Multifamiliar: rosa/malva suave.
  - Comercial: naranja/tierra.
  - Areas verdes: verde oliva.
- Trazos blancos o crema para calles.
- Sombras muy sutiles.
- Tipografia editorial sobria.

## 8. Implementacion sugerida

Stack actual:

- Next.js.
- React.
- Tailwind.
- Framer Motion.
- Lucide React.

Implementacion recomendada:

- Crear componente `InteractiveMasterplan`.
- Usar un SVG del masterplan con grupos por capa.
- Manejar estado activo segun scroll progress.
- Usar `framer-motion` con `useScroll` y `useTransform`.
- Mantener fallback accesible: lista de sectores debajo del mapa.
- Definir data en un archivo separado, por ejemplo `src/data/masterplan.ts`.

Modelo de datos sugerido:

```ts
type MasterplanStep = {
  id: string;
  label: string;
  mapLayerIds: string[];
  markerIds: string[];
  eyebrow: string;
  title: string;
  body: string;
  stats?: Array<{ label: string; value: string }>;
  image?: string;
  cta?: { label: string; href: string };
};
```

Estados minimos:

- `overview`
- `lotes`
- `comercial`
- `verde`
- `townhouses`
- `condominios`
- `accesos`
- `cta`

## 9. Requisitos de performance y accesibilidad

- Respetar `prefers-reduced-motion`.
- No depender exclusivamente del scroll para acceder a informacion.
- Los marcadores deben tener etiquetas accesibles.
- El mapa debe tener texto alternativo funcional.
- En mobile debe poder verse todo sin perder contenido.
- Imagenes/renders deben estar optimizados.
- Si se usa Lottie, incluir fallback SVG/PNG.

## 10. Backlog derivado

Prioridad alta:

- Conseguir o recrear masterplan en SVG por capas.
- Definir steps y copy corto por cada zona.
- Implementar prototipo sticky desktop.
- Implementar fallback mobile.
- Validar que no haya datos conflictivos publicados.

Prioridad media:

- Agregar galeria por step.
- Agregar mini barra de progreso.
- Agregar `Saltar recorrido`.
- Agregar eventos de analytics por step visto y CTA.

Prioridad posterior:

- Conectar disponibilidad real de lotes.
- Agregar zoom/pan manual.
- Agregar modo comparativo de productos.

