# Use the official Node.js 14 image.
FROM node:14

# Set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . .

# Build the React application.
RUN npm run build

# Install the 'serve' package to serve the built application.
RUN npm install -g serve

# Expose port 3000.
EXPOSE 3000

# Start the application using 'serve'.
CMD ["serve", "-s", "build"]
