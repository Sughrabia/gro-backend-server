
# Use Node.js LTS as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Set environment variables (optional, can also be configured in Back4App)
ENV PORT=5000
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
