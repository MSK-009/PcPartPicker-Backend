# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

ENV mongoDB_URI mongodb+srv://khan4501177:671fb718ebdf10ef4afa9b2c@pcpartpicker.svhkr.mongodb.net/PcPartPicker?authMechanism=DEFAULT&authSource=admin

ENV PORT 5000

EXPOSE 5000

# Define the entry point for the container
CMD ["node", ".\index.js"]
