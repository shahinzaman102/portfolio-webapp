# Use the official Node.js 14 image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]
