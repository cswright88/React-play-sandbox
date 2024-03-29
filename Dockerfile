# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH ~/code/ReactPlay/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts
RUN npm install redux react-redux
RUN npm install redux-saga
RUN npm install react-router
RUN npm install @material-ui/core
RUN npm install @material-ui/icons

# start app
CMD ["npm", "start"]