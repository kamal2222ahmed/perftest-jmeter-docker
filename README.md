# Experiment to demonstrate throughput increase on horizontal scale
ref Article: https://a6k.me/articles/performance-test-a-service-with-jmeter-and-scale-with-docker/

## Tools used

- Apache Jmeter
- Docker

## Building and preparing

### Build nginx, app Docker images

- `docker build ./app -t app`
- `docker build ./nginx -t nginx`

### Create a bridge network app_network

- `docker network create app_network`

## Running

### Single instance of App

`docker run --name app --network app_network -it app`

### 3 instances of App behind nginx reverse proxy

`docker-compose up`

### Running JMeter in Non GUI Mode

- `cd jmeter`
- `docker run -it --name jmeter -v ${PWD}:${PWD} -w ${PWD} --network app_network a6kme/jmeter -n -e -t ${PWD}/TestLoadOnApps.jmx -o ${PWD}/reports  -l ${PWD}/TestResult.jtl`

You will find the reports in jmeter/reports directory

### Running JMeter in GUI Mode

- on Mac `docker run -it --name jmeter -v ${PWD}:${PWD} -w ${PWD} -e DISPLAY=$(ipconfig getifaddr en0):0 --network app_network a6kme/jmeter`

Here is an example of an actual run:

$ docker run -it --name jmeter -v ${PWD}:${PWD} -w ${PWD} --network app_network a6kme/jmeter -n -e -t ${PWD}/jmeter/TestLoadOnApps.jmx -o ${PWD}/reports -l ${PWD}/TestResult.jtl
Free memory=486
START Running Jmeter on Thu Dec  5 18:45:22 UTC 2019
JVM_ARGS=-Xmn96m -Xms384m -Xmx384m
jmeter args=-n -e -t /Users/syedahmed/QA/JMETER/PERFTEST-JMETER-DOCKER/perftest-jmeter-docker/jmeter/TestLoadOnApps.jmx -o /Users/syedahmed/QA/JMETER/PERFTEST-JMETER-DOCKER/perftest-jmeter-docker/reports -l /Users/syedahmed/QA/JMETER/PERFTEST-JMETER-DOCKER/perftest-jmeter-docker/TestResult.jtl
Dec 05, 2019 6:45:22 PM java.util.prefs.FileSystemPreferences$1 run
INFO: Created user preferences directory.
Creating summariser <summary>
Created the tree successfully using /Users/syedahmed/QA/JMETER/PERFTEST-JMETER-DOCKER/perftest-jmeter-docker/jmeter/TestLoadOnApps.jmx
Starting the test @ Thu Dec 05 18:45:23 GMT 2019 (1575571523142)
Waiting for possible Shutdown/StopTestNow/HeapDump/ThreadDump message on port 4445
summary +   3659 in 00:00:07 =  560.8/s Avg:   418 Min:   201 Max:  1778 Err:     0 (0.00%) Active: 473 Started: 651 Finished: 178
summary +  30598 in 00:00:30 = 1019.9/s Avg:   394 Min:   200 Max:  7453 Err:     0 (0.00%) Active: 390 Started: 3647 Finished: 3257
summary =  34257 in 00:00:37 =  937.9/s Avg:   397 Min:   200 Max:  7453 Err:     0 (0.00%)
summary +  25743 in 00:00:26 =  974.8/s Avg:   310 Min:   200 Max:  1562 Err:     0 (0.00%) Active: 0 Started: 6000 Finished: 6000
summary =  60000 in 00:01:03 =  953.3/s Avg:   359 Min:   200 Max:  7453 Err:     0 (0.00%)
Tidying up ...    @ Thu Dec 05 18:46:26 GMT 2019 (1575571586411)
... end of run
END Running Jmeter on Thu Dec  5 18:46:30 UTC 2019

