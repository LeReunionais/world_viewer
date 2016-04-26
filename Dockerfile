FROM node:5.4
MAINTAINER LeReunionais

EXPOSE 9000

RUN apt-get update
RUN apt-get install libzmq3 -y
RUN apt-get install libzmq3-dev -y
RUN ldconfig
RUN apt-get install pkg-config -y

WORKDIR /world_viewer
ADD package.json /world_viewer/package.json
RUN npm install

ADD . /world_viewer/

CMD npm start
