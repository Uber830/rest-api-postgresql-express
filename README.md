# API RESTful con Node.js, Express y PostgreSQL

[![GitHub Actions](https://img.shields.io/github/workflow/status/tu-usuario/tu-repositorio/Build%20and%20Deploy?label=GitHub%20Actions&logo=github&style=flat-square)](https://github.com/tu-usuario/tu-repositorio/actions)

🚀 Una API RESTful simple construida con Node.js, Express y PostgreSQL. Esta API te permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos PostgreSQL.

## Requisitos

- Node.js (v18 o superior)
- PostgreSQL (v14 o superior)

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Instala las dependencias:

    ```bash
    cd tu-repositorio
    npm install
    ```

3. Configura la base de datos PostgreSQL:

    - Crea una base de datos en PostgreSQL.
    - Actualiza las credenciales de la base de datos en el archivo `.env`.

4. Inicia la aplicación:

    ```bash
    npm start
    ```

## Uso

- Endpoint de ejemplo: `GET /api/users`
- Consulta la documentación completa de la API en [API Documentation](docs/api.md).

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna mejora, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

🌟 ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!
## Implementación con Docker y GitHub Actions

Este proyecto también incluye la implementación de Docker y GitHub Actions para facilitar el despliegue en DigitalOcean.

### Docker

Para ejecutar la aplicación utilizando Docker, sigue estos pasos:

1. Asegúrate de tener Docker instalado en tu máquina.

2. Construye la imagen de Docker:

    ```bash
    docker build -t nombre-imagen .
    ```

3. Ejecuta el contenedor:

    ```bash
    docker run -p 3000:3000 -d nombre-imagen
    ```

    La aplicación estará disponible en `http://localhost:3000`.

### GitHub Actions

Este proyecto utiliza GitHub Actions para automatizar el proceso de construcción y despliegue en DigitalOcean. Cada vez que se realiza un push a la rama principal, se ejecuta el flujo de trabajo definido en el archivo `.github/workflows/main.yml`.

Para configurar GitHub Actions para tu propio repositorio y desplegar en DigitalOcean, sigue estos pasos:

1. Crea una cuenta en DigitalOcean y obtén un token de acceso.

2. En tu repositorio de GitHub, ve a la pestaña "Settings" y luego a "Secrets".

3. Agrega un nuevo secreto llamado `DIGITALOCEAN_ACCESS_TOKEN` y pega el token de acceso de DigitalOcean.

4. Actualiza el archivo `.github/workflows/main.yml` con la configuración específica de tu proyecto.

Con estos pasos, cada vez que realices un push a la rama principal, GitHub Actions se encargará de construir la imagen de Docker y desplegarla en DigitalOcean automáticamente.

¡Espero que esta información sea útil! Si tienes alguna otra pregunta, no dudes en preguntar.