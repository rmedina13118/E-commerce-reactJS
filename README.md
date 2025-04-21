# Musical House - E-commerce ReactJS

Musical House es una aplicación de comercio electrónico desarrollada con **ReactJS**, **Firebase** y **TailwindCSS**. Este proyecto permite a los usuarios explorar productos musicales, agregar artículos al carrito, realizar compras y gestionar pedidos.

## Características

- **Página de inicio**: Incluye un video de fondo, productos destacados y un llamado a la acción.
- **Catálogo de productos**: Visualización de productos con categorías y filtros.
- **Detalle de producto**: Información detallada de cada producto.
- **Carrito de compras**: Gestión de productos en el carrito con actualización de cantidades.
- **Proceso de compra**: Formulario de checkout con validación y resumen de compra.
- **Gestión de pedidos**: Almacenamiento de pedidos en Firebase con actualización de stock.
- **Página 404**: Página personalizada para rutas no encontradas.

## Tecnologías utilizadas

- **ReactJS**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Firebase**: Base de datos en tiempo real para la gestión de productos y pedidos.
- **TailwindCSS**: Framework de CSS para estilos rápidos y responsivos.
- **Vite**: Herramienta de construcción rápida para proyectos de React.
- **React Router**: Navegación entre páginas.

## Estructura del proyecto

```
E-commerce-reactJS/
├── public/                # Archivos públicos (favicon, etc.)
├── src/
│   ├── assets/            # Recursos estáticos (imágenes, videos, íconos)
│   ├── components/        # Componentes reutilizables (Navbar, ItemList, etc.)
│   ├── context/           # Contextos para la gestión de estado (CartContext, ProductContext)
│   ├── firebase/          # Configuración de Firebase
│   ├── pages/             # Páginas principales (Home, Shop, Checkout, etc.)
│   ├── services/          # Servicios para Firebase (productos, pedidos)
│   ├── App.jsx            # Componente principal de la aplicación
│   ├── main.jsx           # Punto de entrada de la aplicación
│   ├── index.css          # Estilos globales
│   └── App.css            # Estilos específicos de la aplicación
├── tailwind.config.js     # Configuración de TailwindCSS
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Documentación del proyecto
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/musical-house.git
   cd musical-house
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura Firebase:
   - Crea un proyecto en [Firebase](https://firebase.google.com/).
   - Copia las credenciales de configuración en `src/firebase/firebaseConfig.js`.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre la aplicación en tu navegador en `http://localhost:5173`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores:
    ```bash
    git checkout -b nombre-de-tu-rama
    ```
3. Realiza tus cambios y haz un commit:
    ```bash
    git commit -m "Descripción de los cambios"
    ```
4. Sube tus cambios a tu repositorio:
    ```bash
    git push origin nombre-de-tu-rama
    ```
5. Abre un Pull Request en este repositorio.


## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme:

- **Correo electrónico**: richardmedina1318@gmail.com
- **GitHub**: [rmedina13118](https://github.com/rmedina13118)
- **LinkedIn**: [Richard Medina Echeverri](https://www.linkedin.com/in/rich-code-web-developer/)


¡Gracias por visitar este proyecto!

