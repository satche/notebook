---
aliases: [Internet of Things, M2M, Machine to Machine]
tags: []
---

# IoT

The [Internet of Things](https://wikipedia.org/wiki/internet_of_things) describes connected objects with sensors that share data with other devices and systems over a network.

A simple example would be a noise sensor in a street that sends data to a server for analysis.

## LPWAN

A [Low-Power Wide-Area Network](https://wikipedia.org/wiki/low-power_wide-area_network) wireless communication technology designed for long-range communication with low power consumption, like sensors operated on a battery. It has a better area coverage than technologies like 4G/5G, but with lower bandwidth.

Characteristics vary from technologies to other
- Range: 10-50 km
- Data speed: 50-1000 kbps
- Data size: 10-250 bytes
- Autonomy: 10+ years

**Main technologies**:
- [LoRaWAN](https://wikipedia.org/wiki/lora): provide public and *private* networks
- [Sigfox](https://wikipedia.org/wiki/sigfox): high range, high battery life, low bandwidth
- [NB-IoT](https://wikipedia.org/wiki/narrowband_iot): low power consumption
- [LTE-M](https://wikipedia.org/wiki/lte-m): highest bandwidth, low battery life

## Home automation

**KNX**
- Standardized communication protocol
- Wired & Wireless
- Interworking and scalable system
- [Pub-Sub](../../architecture/styles/publish-subscribe.md) architecture style
	- Event-bus where IoT devices connect
- Actuator
	- Device that act physically on objects (e.g mechanism to open a window)

**Channels**
- Twisted Pair: TP
- Power Line: PL
- Radio Frequency: RF
- IP/Ethernet-Wifi