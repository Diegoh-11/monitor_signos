# Taller Práctico: Fundamentos de Lógica con JavaScript

## Autor
**Diego Alejandro Herrera Cano**  
Técnico laboral como asistente en desarrollo de software  
CESDE — FrontEnd 1

## Descripción
Solución al taller práctico de lógica con JavaScript. Contiene dos ejercicios
desarrollados con prompt(), confirm() y console.log(), sin manipulación del DOM.

---

## Ejercicio 2: Monitor de Signos Vitales Espacial
**Archivo:** `src/js/ejercicio2.js`

### ¿Qué hace?
Simula el monitor cardíaco de un astronauta en caminata espacial (EVA).
Solicita lecturas de BPM continuamente y las clasifica según rangos médicos.
La misión termina de forma segura con un número negativo, o se aborta
automáticamente al acumular 3 emergencias críticas.

### Lógica utilizada
- Ciclo `while` para mantener el monitoreo activo
- Función `pedirBpm()` valida que el dato sea numérico con `isNaN`
- Función `clasificarBpm()` clasifica el BPM en crítico, leve o normal
- Función `mostrarResumen()` calcula el promedio con `toFixed(2)`
- Función `iniciarMision()` controla el flujo principal

### Rangos médicos
| Rango | Clasificación |
|---|---|
| 60 - 100 BPM | Normal |
| 40 - 59 BPM | Bradicardia leve |
| 101 - 130 BPM | Taquicardia leve |
| Menor a 40 o mayor a 130 | Crítico |

---

## Ejercicio 3: El Prestamista del Barrio
**Archivo:** `src/js/ejercicio3.js`

### ¿Qué hace?
Digitaliza el sistema de cobros de un negocio de microcréditos.
Calcula el cronograma de pagos mes a mes aplicando intereses diferenciados:
5% durante los primeros 6 meses y 8% a partir del séptimo mes.

### Lógica utilizada
- Ciclo `for` para recorrer cada mes del cronograma
- Función `pedirDatos()` valida monto y meses con `isNaN` y valores negativos
- Función `calcularCuota()` aplica el interés según el mes
- Función `mostrarCronograma()` imprime el detalle mes a mes
- Función `mostrarResumen()` muestra el total de intereses y gran total

---

## Cómo ejecutarlo
1. Clona el repositorio
2. Abre `index.html` en el navegador
3. Presiona `F12` para abrir la consola
4. Para cambiar de ejercicio edita `index.html` y cambia el `<script>` activo

---

## Estructura del proyecto
```
ejercicio-funciones/
├── public/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── html/
│   │   └── servicios.html
│   └── js/
│       ├── ejercicio2.js
│       └── ejercicio3.js
├── index.html
└── README.md
```

## Tecnologías
- HTML5
- JavaScript vanilla
- Sin frameworks ni librerías externas