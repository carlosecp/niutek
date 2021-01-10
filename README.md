# niudot

Niudot es una aplicación administrativa para cooperativas. 

En construcción...

---

## Development

Esta aplicación está siendo construída con tecnología como ReactJS, Flask y MySQL. Para poner a correr un servidor local de desarrollo para la interfaz primero se acceder al folder `/niudot-app`, luego correr el comando:
```bash
  $ npm install   # Si no tenemos la dependencias instaladas
  $ npm start
```
Esto inicia el servidor de ReactJS. Por otra parte, existen dos formas de compilar los estilos, para desarrollo y para produccion. Para compilar dichos estilo (para los cuales utilizamos [TailwindCSS](https://tailwindcss.com/) se corren los siguientes comandos:
```bash
  # Compilar los estilos para desarrollo:
  $ npm run tailwind
  
  # Compilar los estilos para produccion:
  $ export NODE_ENV=production    # Optimiza el archivo para produccion
  $ npm run tailwind
```
