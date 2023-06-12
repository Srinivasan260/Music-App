FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port on which the Node.js application will run
EXPOSE 3003


# Define the command to start the application
CMD [ "node", "index.js" ]
