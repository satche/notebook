# Turing machine

The Turing machine is a theoretical "machine" that define the simplest model of a computer. It includes the following (simplified) components:

- **Tape**: store cells that contains symbols (e.g. 0 and 1)
- **Head**: read/write the symbols by moving across the tape
- **States**: hold the *current state* of the machine and change according to the transition function
- **Transition function**: set of rules to determine machine behaviour, based on the *current state* and the symbol under the head

## Turing-complete

A system is said *Turing-complete* when it can simulates a Turing machine.
- Supports conditional branching and memory manipulation.
- Can theoretically solve any problem that a computer can.