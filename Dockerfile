FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the port and start the application
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
