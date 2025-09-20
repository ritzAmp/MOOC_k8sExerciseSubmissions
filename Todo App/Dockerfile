# Use Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install deps using lockfile for reproducible builds
RUN npm ci --only=production

# Copy source code
COPY . .

# Start app
CMD ["npm", "start"]
