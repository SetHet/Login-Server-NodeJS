# Node Server

# Modo desarrollo

### Correr en modo desarrollo

1. Sin auto levantar docker compose
    ```sh
    # levantar docker
    npm run docker

    # levantar node
    npm run dev

    # Detener y destruir bases de datos
    npm run devdestroy
    npm run dockerdown
    ```
2. Con auto levantar docker compose
    ```sh
    # Levantar
    npm run devdocker

    # Detener, sin borrar
    npm run devstop

    # Detener y destruir bases de datos
    npm run devdestroy
    npm run dockerdown
    ```
