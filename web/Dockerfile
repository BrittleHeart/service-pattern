FROM node:16.15.3

USER overmind

WORKDIR /app

RUN chown -R overmind:overmind /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]