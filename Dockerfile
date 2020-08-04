FROM node:10	
	
WORKDIR /src
	
COPY package*.json ./ build/

ENV PATH /app/node_modules/.bin:$PATH
	
RUN npm install
RUN npm install react-scripts -g
	
COPY . .

EXPOSE 3000
	
CMD ["npm", "run", "start"]
