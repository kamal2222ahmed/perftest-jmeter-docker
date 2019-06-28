# Experiment to demonstrate throughput increase on horizontal scale

## Tools used

- Apache Jmeter
- Docker

## Building and preparing

### Build nginx, app Docker images

- `docker build ./app -t app`
- `docker build ./nginx -t nginx`

### Create a bridge network app_network

- `docker create network app_network`

## Running

### Single instance of App

`docker run --name app --network app_network -it app`

### 3 instances of App behind nginx reverse proxy

`docker-compose up`

### Running jmeter

`docker run -it --name jmeter -v ${PWD}:${PWD} -w ${PWD} -e DISPLAY=$(ipconfig getifaddr en0):0 --network app_network a6kme/jmeter -n -e -o -t ${PWD}/TestLoadOnApps.jmx ${PWD}/reports  -l ${PWD}/TestResult.jtl`