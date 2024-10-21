# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Install a lightweight web server to serve the built files
RUN npm install -g serve

# Command to run the app in production
CMD ["serve", "-s", "dist"]

# Expose the port that the app will run on
EXPOSE 3000
