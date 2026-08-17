# El Triangulo - Source of truth para web

Estado: fuente operativa para contenidos y UX  
Fuente principal: Google Doc `El_Triangulo_Documento_Integral`  
Documento fuente: https://docs.google.com/document/d/11JbBasZ_4t7Z6T_2XpdBnhOm3bXKaoF-FrdufOgsTdU  
Revision interna leida: Agosto 2026  
Ultima revision de este archivo: 2026-08-17

Contexto complementario:

- Boceto de brochure: [02-contexto-brochure-boceto.md](02-contexto-brochure-boceto.md)
- El brochure aporta narrativa, visuales, infraestructura y datos urbanisticos, pero no reemplaza este source of truth cuando hay contradicciones.

## 1. Definicion sintetica del proyecto

El Triangulo es un desarrollo inmobiliario mixto de usos combinados ubicado en Open Door, Partido de Lujan, Provincia de Buenos Aires. Integra lotes, town houses, condominios y centro comercial dentro de un predio triangular de 17 hectareas.

Promesa de marca:

> Donde la naturaleza y lo urbano se encuentran.

Sintesis recomendada para la web:

> Un desarrollo urbano-natural en Open Door que combina vivienda, servicios, espacios verdes y conectividad estrategica para vivir, trabajar y disfrutar en un mismo entorno.

## 2. Ubicacion

Datos confirmados:

- Terreno triangular de 17 hectareas.
- Interseccion de Ruta Provincial 192 y Avenida Juan de Dios Filiberto.
- Localidad de Open Door.
- Municipio de Lujan, Provincia de Buenos Aires, Argentina.
- Entre Lujan y Pilar.
- Aproximadamente a 50 minutos de CABA.

Iframe de mapa provisto para incrustar:

```html
<iframe src="https://www.google.com/maps/d/embed?mid=1O0UkxCXQmd-2pfNEJdqG4mRnbKQJSNc&ehbc=2E312F" width="640" height="480"></iframe>
```

Uso recomendado en web:

- Incluir mapa en pagina `Ubicacion` y modulo resumido en home.
- Acompanar con bullets de cercania: Open Door, Lujan, Pilar, CABA.
- Evitar prometer tiempos exactos adicionales sin validacion.

## 3. Pilares de posicionamiento

Pilares confirmados:

- Naturaleza y espacios verdes.
- Conectividad estrategica.
- Bajo costo de mantenimiento frente a desarrollos comparables.
- Servicios de cercania y centro comercial propio.
- Variedad de formatos de vivienda.
- Seguridad electronica con control de acceso y salida.

Golden Circle:

- Por que: brindar una propuesta para vivir en armonia con la naturaleza sin perder comodidad urbana.
- Como: priorizando espacios verdes e infraestructura moderna.
- Que: barrio abierto con opciones de vivienda, centro comercial, parques y senderos naturales.

## 4. Identidad verbal

Slogan:

- Donde la naturaleza y lo urbano se encuentran.

Conceptos de marca:

- Conecta.
- Construí.
- Coincidí.
- Vivir, trabajar y disfrutar.
- Redescubrir Lujan.
- Naturaleza + vida urbana.

Tono:

- Aspiracional.
- Profesional y confiable.
- Calido y acogedor.

Regla editorial para la web:

El tono puede ser aspiracional, pero cada bloque comercial debe cerrar con una prueba concreta: ubicacion, superficie, etapa, producto, financiacion, seguridad, costos, proceso de compra o contacto.

## 5. Identidad visual

Paleta confirmada:

- Verde principal: `#016241`
- Verde oscuro: `#284339`
- Crema / fondo: `#F4F3EA`
- Acento claro: `#DFF9BA`

Tipografia de marca:

- Titulos y subtitulos: Brandon Grotesque.

Nota tecnica:

El repo actual usa Plus Jakarta Sans, Work Sans e Inter. Si Brandon Grotesque no esta disponible/licenciada para web, mantener una alternativa similar y documentar la decision.

## 6. Masterplan

Unidades de negocio:

- Lotes.
- Town House.
- Condominio.
- Centro Comercial.

Desarrolla/comercializa:

- Masterplan junto al Estudio Arquitectonico Santiago Cordeyro y Raices Propiedades.
- Comercializa: Raices Propiedades.
- Diseno arquitectonico: Estudio Arquitectonico Santiago Cordeyro.

## 7. Productos

### Lotes

Estado comercial:

- Venta activa.

Datos confirmados:

- Lotes desde 450 m2.
- Medidas promedio: 17,30 m de frente por 28 m de profundidad.
- Diseno urbanistico moderno y funcional.
- Areas verdes, plazas y senderos peatonales.
- Seguridad electronica con control de entrada y salida.
- Bajos costos de mantenimiento en concepto de parquizado y seguridad.
- Codigo/reglamento arquitectonico para estandar homogeneo y de calidad.

Dato con conflicto:

- Soporte de venta: 141 lotes.
- Sitio web: 128 lotes.
- Brochure: 144 lotes en memoria descriptiva.
- Brochure, lamina de masterplan: 128 lotes unifamiliares y 67.464 m2.
- Recomendacion: usar `128 lotes` solo si el equipo confirma que el sitio web es la version vigente; si no, redactar "lotes residenciales desde 450 m2" hasta resolver el dato.

Disponibilidad y precios segun documento:

- Actualizado al 11/07/2025.
- 98 lotes disponibles, numerados del 17 al 131.
- Superficies desde 450,50 m2 hasta 623,73 m2.
- Promedio aproximado: 505 m2.
- Precio de lista: USD 95/m2.
- Precio contado: USD 80,75/m2.
- Descuento contado: 15%.
- Anticipo fijo: USD 10.000.
- Saldo financiable 100% en dolares.
- Plazos: 12, 24, 36, 48 o 60 meses.
- Interes total sobre saldo: 8%, 16%, 24%, 32% y 40% respectivamente.
- Tasa fija aproximada: 0,67% mensual.

Uso recomendado en web:

- Publicar precios solo si el equipo confirma vigencia comercial.
- Si no se confirma, usar CTA: "Solicitar lista de precios actualizada".
- Crear simulador solo con disclaimer de fecha y validacion comercial.

CTA principal:

- Consultar lotes disponibles.

CTA secundarios:

- Solicitar lista de precios.
- Agendar visita.
- Hablar con un asesor.

### Town House

Estado comercial:

- Venta inactiva.
- El documento contiene un probable error: "Lanzamiento 2927".
- Recomendacion: corregir/validar fecha antes de publicar.

Datos confirmados:

- Residencias bifamiliares tipo duplex.
- 140 m2.
- Llave en mano.
- Jardin privado.
- Lineas contemporaneas.
- Acabados de alta calidad.
- Amplias areas de estar.
- Cocina integrada.
- Orientado a parejas jovenes y familias pequenas.

CTA principal:

- Recibir novedades del lanzamiento.

Dato complementario del brochure:

- El brochure menciona 10 viviendas apareadas en cinco lotes, del 140 al 144, con 140 m2 por unidad.
- La lamina de masterplan menciona 23 bifamiliares y 8.546 m2.
- Recomendacion: validar si son etapas distintas o si un dato reemplaza al otro.

### Condominio

Estado comercial:

- Venta inactiva.
- Lanzamiento 2028 segun documento.

Datos confirmados:

- 150 unidades residenciales.
- Tipologias de 1, 2 y 3 dormitorios.
- 5 edificios de 3 plantas cada uno.
- Jardin central con piscina.
- Seguridad electronica.
- Cocheras privadas.
- Amenities propios: piscina y gimnasio.

CTA principal:

- Inscribirme para preventa.

Dato complementario del brochure:

- Dos terrenos multifamiliares con superficie total de 12.459 m2.
- Condominio 1: 5.926 m2.
- Condominio 2: 6.531 m2.
- Planta baja + 3 pisos.
- Aproximadamente 180 departamentos de 70 m2 a 150 m2.
- Recomendacion: validar conflicto entre `150 unidades` del documento integral y `aprox. 180 departamentos` del brochure.

### Centro Comercial

Estado comercial:

- Venta inactiva.
- Lanzamiento 2027 segun documento.

Datos confirmados:

- 15.000 m2 totales.
- Mas de 9.000 m2 construidos.
- 280 metros lineales de frente comercial.
- Entretenimiento.
- Gastronomia.
- Bares.
- Gimnasio.
- Co-working.
- Centro de salud.
- Concesionaria.
- Tiendas de moda.
- Espacios boutique.
- Flexibilidad para adaptar espacios boutique o unidades de gran escala.
- YPF Full inaugurada en 2023.
- YPF Full como ancla comercial y validador del transito del corredor.

CTA principal:

- Consultar oportunidades comerciales.

Datos complementarios del brochure:

- Total construido especificado: 9.031 m2.
- Total de locales: 50.
- Estacionamiento para 181 autos.
- Espacios para motos, bicicletas y palenques para caballos.
- Cuatro plazas publicas.
- Primera etapa: 22 locales, 4.157 m2 construidos.
- Segunda etapa: 31 locales, 4.874 m2 construidos.
- Locales ancla proyectados: almacen boutique, banco, cafe, restaurante, gimnasio, sky bar, Crystal Box y centro medico.

## 8. Publicos objetivo

### Lotes

Perfil:

- Familias y personas que buscan construir su hogar a medida.
- Valoran espacio, diseno, naturaleza, seguridad y servicios.

Buyer persona del documento:

- Maria, 38, arquitecta, madre de dos hijos.
- Busca construir una casa familiar que refleje identidad y estilo de vida.

### Town House

Perfil:

- Parejas jovenes y familias pequenas.
- Buscan vivienda moderna, jardin privado, comodidad y conectividad.

Buyer persona:

- Lucas, 30, ingeniero, vive en Palermo con su pareja.
- Quiere salir de la ciudad sin perder comercios y servicios.

### Condominio

Perfil:

- Profesionales jovenes, parejas sin hijos y personas mayores.
- Buscan vida urbana sin preocupaciones, servicios y sentido de comunidad.

Buyer persona:

- Marta, 25, disenadora grafica.
- Busca independencia, cercania familiar y actividades al aire libre.

### Centro Comercial

Perfil:

- Inversores de medio y alto capital.
- Buscan expansion comercial, ubicacion estrategica y retorno.

Buyer persona:

- Pablo, 45, inversor inmobiliario, vive en Pilar.
- Busca oportunidades comerciales con gestion profesional.

## 9. Proceso de compra

Pasos confirmados:

1. Contacto inicial con equipo de ventas.
2. Visita al proyecto.
3. Seleccion de propiedad.
4. Reserva.
5. Firma de contrato: adhesion al fideicomiso Growing Lots y conformidad con codigo arquitectonico.
6. Pago del anticipo correspondiente.
7. Si hay financiacion, las cuotas comienzan a abonarse a los 30 dias posteriores a la firma y pago del adelanto.

Lugar de cierre:

- Oficina de Raices Propiedades en la ciudad de Lujan.

Uso recomendado:

- Convertir este proceso en un modulo visual de 5 o 6 pasos.
- Incluirlo en pagina de Lotes y FAQ.

## 10. FAQ confirmadas

Preguntas que deben estar en la web:

- Que servicios ofrece el centro comercial.
- Que tan accesible es El Triangulo.
- Como se garantiza la seguridad en el barrio.
- Que amenities y servicios ofrece El Triangulo.
- Como es el proceso de compra.
- En que consiste el codigo arquitectonico y reglamento.
- Cual es el plan de financiamiento disponible.
- Cuales son los costos de mantenimiento o expensas.
- Como agendar una visita.

Respuesta clave sobre amenities:

- El barrio no contara con amenities generales para mantener bajos costos de mantenimiento.
- Existiran planes de descuento y promociones para utilizar servicios del centro comercial y otros prestadores.
- El Condominio si tendra amenities propios: piscina y gimnasio.

## 11. Contacto

Datos vigentes segun documento:

- Sitio web: https://www.eltriangulodeopendoor.com/
- WhatsApp: +54 9 11-2296-8397
- Llamadas: (02323) 1530-0598
- Email: ventas@eltriangulodeopendoor.com
- Instagram: @eltriangulodeopendoor
- LinkedIn: /eltriangulodeopendoor

Nota:

El documento indica que los numeros vigentes difieren del soporte de venta original. La web nueva debe usar una sola version de contacto y eliminar placeholders.

## 12. Reglas para Antigravity

No inventar:

- Cantidad final de lotes si no se resuelve conflicto 141 vs 128.
- Cantidad final de townhouses si no se resuelve conflicto 10 viviendas vs 23 bifamiliares.
- Cantidad final de condominios si no se resuelve conflicto 150 vs aprox. 180 unidades.
- Fechas de lanzamiento distintas a las validadas.
- Precios vigentes si no se confirma actualizacion posterior al 11/07/2025.
- Porcentaje vendido.
- Club house general.
- Seguridad con IA.
- Control biometrico.
- Spa.
- 80 hectareas de reserva.
- 15 km de ciclovias.
- Amenidades generales fuera del condominio.

Si se necesita mostrar informacion no validada:

- Usar `Consultar con asesor`.
- Usar `Proximamente`.
- Usar `Sujeto a disponibilidad comercial`.
- Usar `Lista de precios vigente a confirmar`.

## 13. Prioridades de contenido para la web nueva

Prioridad 1:

- Home.
- Masterplan interactivo.
- Lotes.
- Contacto segmentado.
- Ubicacion.

Prioridad 2:

- Town House.
- Condominio.
- Centro Comercial.
- FAQ.
- Proceso de compra.

Prioridad 3:

- Simulador de financiacion.
- Selector visual de disponibilidad.
- Galeria de avances.
- Descarga de brochure/lista de precios.
