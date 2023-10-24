FROM node:20-alpine

WORKDIR /api

COPY . .

RUN npm install
RUN npm run build

EXPOSE 4242

# Basic npm start.
CMD ["npm", "start"]
