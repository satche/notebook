---
aliases: [System time]
---

# Clock

 A computer uses internal clocks to represent the [system time](https://en.wikipedia.org/wiki/System_time).

## Hardware clock

- Also called [Real-Time Clock](https://en.wikipedia.org/wiki/Real-time_clock) (RTC)
- Small clock circuit on the motherboard
- Typically use quartz crystal oscillator
- Allow to keep track of time when the computer is off
- Powered by a backup battery
- Pass the time to the OS so it has a starting reference point

## System clock

- Also called software clock or kernel clock
- Handled by the [OS](os.md) when it's running
- Often adjusted and synchronized (see below)

## Synchronization

### Problem

- Hardware and software clocks are subject to drifts. It loses accuracy over time because of physical and electrical factors (temperature, voltage changes, etc)
- It can lead to inconsistent timestamps, making log correlation, debugging, backups or distributed transactions harder
- Can cause security and authentication issue (time-based tokens invalidation)

### Solution

- Time servers are reliable sources used to synchronize the clock, using references like GPS or atomic clocks
- [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used over an IP network to synchronize time. A remote time server is interrogated about the current time
- The network delays and offset are estimated to adjust the local clock accordingly