FROM node:5.4
MAINTAINER LeReunionais

EXPOSE 9000

RUN apt-get update
RUN apt-get install libzmq3 -y
RUN apt-get install libzmq3-dev -y
RUN ldconfig
RUN apt-get install pkg-config -y

COPY . /world_viewer
WORKDIR /world_viewer

RUN npm install

CMD npm start
