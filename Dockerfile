FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build"]
