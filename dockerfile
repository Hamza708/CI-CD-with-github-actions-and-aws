FROM node:18.19-alpine
# Create app directory
# 2 - Next we create a directory to hold the application code inside the image, this will be the working directory for your application:
WORKDIR /usr/src/app
# Install app dependencies
# 3 - This image comes with Node.js and NPM already installed so the next thing we need to do is to install your app dependencies using the npm binary:
# Please note that if you are using npm version 4 or earlier a package-lock.json file will not be generated.
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# 4 - Next install the dependencies
RUN npm cache clean --force
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

#To bundle your app's source code inside the Docker image, use the COPY instruction:
# Bundle app source
COPY . .

EXPOSE 4500

CMD [ "npm", "run", "start" ]


