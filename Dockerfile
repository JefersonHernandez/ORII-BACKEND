# Use an official Node.js LTS image as base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run tsc

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/index.js"]
