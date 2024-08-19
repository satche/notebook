---
aliases: [Fog Computing]
tags: []
---

# Edge Computing

# Overview

[Edge Computing](https://wikipedia.org/wiki/edge_computing) is a cloud architecture/paradigm that tends to bring computation and storage closer to the sources of data by placing servers around the cloud.

Edge servers can be placed close to private computers or [IoT](iot.md) devices to get the data, partially store and analysis it before sending it to data centers. It can also deliver service, e.g response to HTTP requests.

Objectives

- Reduce the workload from the cloud
- Limit the traffic between the source and the cloud
- Keep the decision-making dimension as close as possible to the source
- Improve privacy and security

When to use it

- Data is too big to transfer to the cloud
- Data is sensible (privacy and security)
- Near real-time access on data is needed
- Network between source and cloud is unstable

## Fog Computing

[Fog computing](https://wikipedia.org/wiki/fog_computing) is complementary to cloud computing: edge servers are connected via a local network that will do part of the computation, processing and storage on data receive from the source devices.

1. The IoT device sends data to the edge device. It can be a Raspberry Pi or a big server, depending on the use case.
2. If the edge is unable to make a decision, it sends the data to the cloud.
3. The cloud processes data. It can be through a large computing power that the edge device lacks, or tasks that require human intervention, like labeling data.
4. The data is send back to the edge and provide the result.

## Use-cases

Here are some use-cases to concretely understand how edge computing works.

### Web browsering

**Location-based personalization**
When a request comes from a specific location, the edge computer can alter the request to specify services based on the region, such as detecting currency or language. It is also possible for the origin server to send a response, e.g providing a discount or calculating shipping fees.

### IoT

**Smart public lightening**
We want to adapt public lighting on roads to limit energy consumption. Sensors are fixed on lamps to detect ambient light and the passage of vehicles. An edge server, located below the sensor, computes circulation tendencies (daily, weekly, monthly, etc.).

The data is sent to the cloud for extensive analysis (e.g with machine learning) and to generate in-app reports.

**Electricity Consumption in a Neighborhood**
IoT devices and sensors measure electricity consumption of different elements, such as electric cars, charging stations, and households. The edge server performs some predictions on energy data.

If there is a prediction error, such as an abnormally high energy consumption in the last 15 minutes, the data is sent to the cloud. The different edge servers can communicate with each other and/or through an intermediate machine (fog computing).

## Solutions

- Azure IoT Edge
- AWS GreenGrass
- Google Coral
- Nuvla.io, NuvlaBox