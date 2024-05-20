# Express-Typescript
ExpressJS using typescript and ORM Prisma

```
npm i express
npm i -D typescript
npm i -D @types/express
npx tsc --init
npm i -D nodemon
npm i -D ts-node
npm install cors
npm install --save-dev @types/cors
npm i @types/node --save-dev
npm install dotenv


npm install @prisma/client
npx prisma init --datasource-provider mysql
npx prisma db pull (if existing database)


fix
  "rootDir": "./src", 
  "outDir": "./dist",  
  "noImplicitAny": true,
  "strictNullChecks": true, 
  "strictFunctionTypes": true,  |


call this npx tsc --build

node ./dist/index.js


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc --build",
    "start": "node dist/index.js"
  },



this is under src/utils

import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma

```
