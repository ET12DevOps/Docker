# Dockerizar aplicación nodejs

## Aplicación (Windows)

- Crear una aplicacion nodejs, con los paquetes **express**, **dotenv** y **nodemon**

- Verificar que el proyecto contega los archivos **gitignore** y **.env**

## Docker (Windows)

En el directorio raíz de la aplicación crear los siguientes archivos con el contenido correspondiente:

- .dockerignore
```
node_modules
npm-debug.log
```

- Dockerfile
```
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
```

## Máquina virtual (Ubuntu)

Para instalar docker primero preparar el ambiente de instalación, ejercutar los siguientes comandos en Ubuntu Server:

```sh
sudo apt update
```
```sh
sudo apt install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
```sh
sudo mkdir -p /etc/apt/keyrings
```
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Instalación Docker

Ejecutar los siguientes comandos en Ubuntu Server:

```sh
sudo apt update
```
```sh
sudo apt install docker-ce docker-ce-clicontainerd.io docker-compose-plugin
```

## Dockerizar aplicación (Ubuntu)

Para crear una imagen de la aplicación es necesario tener una copia de nuestro código fuente en la máquina virtual. Para ello podemos copiar los archivos mediante **SCP**, **WinSCP** o via **Github** (recomendado)

Una vez con el código fuente en la máquina virtual, se debe generar una imagen de nuestra aplicación para ello se utilizará la configuración definida en el archivo **Dockerfile**

Se debe proceder a ejecutar el siguiente comando:

```sh
docker build . -t et12admin/app
```

La cadena **et12admin/app** no es obligatorio (es una buena práctica) se puede reemplazar por el nombre de la aplicación directamente.
 
## Ejecución de imagen docker (Ubuntu)

Una vez creada la imagen docker de nuestra aplicación se debe ejecutar dicha imagen, para ello ejecutamos el siguiente comando:

```sh
docker run -p 80:3000 -d et12admin/app
```

## Verificación (Ubuntu)

Para ver si la aplicación se encuentra en ejercución se debe abrir un navegador y colcar en la barra de diracciones la dirección IP del servidor (máquina virtual), se deberia cargar la página de la aplicación