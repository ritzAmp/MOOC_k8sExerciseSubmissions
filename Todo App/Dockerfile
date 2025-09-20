# Use Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose port (default: 8080, but can be overridden by ENV PORT)
EXPOSE 8080

# Start app
CMD ["npm", "start"]
