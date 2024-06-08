# Use Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the app files
COPY . .

# Expose port for the React server
EXPOSE 3000


# Start the React server
CMD ["npm", "start"]