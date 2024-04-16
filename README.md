This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

1. To install all the dependencies used in the project, run the command:

```
npm install
```

2. Create a .env file in the root folder and add teh folowing environment varibales:
```bash
NEXT_PUBLIC_GOOGLEMAPS_APIKEY
NEXT_PUBLIC_GOOGLEMAPS_MAPID
NEXT_PUBLIC_API_URL
```

3. Run the app:
```
npm start
```

4. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.



# FRONT Application Routes:

|          URL path              |        Description        |   Private   |
| :----------------------------: | :-----------------------: | :---------: |
|  /                             |  Home                     |     ❌      |
|  /inicio/inicio-sesion         |  Login                    |     ❌      |
|  /inicio/registro              |  Signup                   |     ❌      |
|  /restaurantes/lista           |  Listado de restaurantes  |     ✅      |
|  /restaurantes/:restaurantId   |  Restaurant detail        |     ✅      |
|  /restaurantes/crear-nuevo     |  Create restaurant        |     ✅      |
