# Race condition

A [race condition](https://en.wikipedia.org/wiki/Race_condition) happens when 2 processes try to do something at the same time, and the outcome depends on who finish first, leading to unexpected and buggy results.

## Example

2 processes want to increment a global value. The sequence of operation should ideally run like this:

|Thread 1|Thread 2| |Integer value|
|---|---|---|---|
||||0|
|read value||←|0|
|increase value|||0|
|write back||→|1|
||read value|←|1|
||increase value||1|
||write back|→|2|
If both processes work in the same time, they increase the value without synchronisation, leading to a wrong final result:

|Thread 1|Thread 2| |Integer value|
|---|---|---|---|
||||0|
|read value||←|0|
||read value|←|0|
|increase value|||0|
||increase value||0|
|write back||→|1|
||write back|→|1|
