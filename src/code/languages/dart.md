# Dart

## Values & Types

Dart has type inference: it can detect and interpret type if not specified

### Numbers

```dart
int i = 1;
double dbl = 1.0;
num nbr = 1; // works for int and double
```

### String

```dart
String h = "hello";
print("$h world"); // "hello world"

String multiline = """Hello
world""";
```

### Null

Dart don’t like null values. Try to specify if you allow variables to be null `?` or if you guarantee they can’t be `!`.

```dart
var a;           // return null if nothing is precised
var foo = bar!;  // bar is guaranteed to be never null
int? age = null; // age can be an int or be null

// Assign a value if is null
a ??= "value";
var b = a ?? "value";
```

### Enum

```dart
enum Drink { coffee, tea, soft }
Drink espresso = Drink.coffee;
```

## Variables

### Assign

```dart
dynamic d = 1;  // can change type & value
var v = 1;      // can't change type, can change the value
final f = 1;    // can't change type nor value (but can reassign)
const c = 1;    // can't change type nor value (immutable)
```

### Constants

#### final

```dart
final list = [1,2,3];
list.add(4); // [1,2,3,4]
```

Use it if the **value is not known at compile time** (database/api requests, runtime computed values like `new DateTime.now()`, etc.).

```dart
final name = "Alice";
name = "Bob"; // Error: a final variable can only be set once.
```

When object are `final`, you can modify items inside objects

#### const

Use it when the value of the variable is known before runtime.

```dart
const date = new DateTime.now();
// Error: New expression is not a constant expression
```

You can use it to declare constant values. The value is immutable, not the variable

```dart
var list = const [1,2,3];
list.add(4); // Error: Unsupported operation
list = [1,2,3,4]; // [1,2,3,4];
```

```dart
final list = const [1,2,3];
list.add(4); // Error: Unsupported operation
list = [1,2,3,4]; // Error: Can't assign to the final variable 'list'
```

If you’re using `const` inside a class, you have to use `static`

```dart
class Person {
  static const name = "Alice";
}
```

Unlike `final`, `const` is immutable: items inside objects can’t be changed

#### late

In some cases, like top-level variables and instance variable, Dart can’t determine if non-null value is set to a variable before it’s used. You can use `late`.

```dart
late int number;

void main() {
  number = 42;
  print(number); // 42
}
```

It’s also used to lazily initializing a variable

```dart
late String name = getName();
```

## Functions

```dart
void logHi() { print("hi"); };      // simple function without return
String sayHi() { return "hi"; };    // specify return type
num addOne(nbr) { return 1 + nbr }; // with parameter
num addTwo(nbr) => 2 + nbr;         // arrow function (shorthand)
```

### Parameters

```dart
String sayFullname(String firstname, String lastname) {
  return "$firstname $lastname";
}

sayFullname("John", "Doe"); // John Doe
```

#### Optional parameters

You can make a parameter optional

```dart
String sayFullname(String firstname, [String? lastname]) {
  if (lastname == null) return firstname;
  return "$firstname $lastname";
}

sayFullname("Alice", "Cooper"); // John Doe
```

#### Default value

You can specify a default value with optional parameters

```dart
String sayName([String name = "John"]) => name;
sayName(); // John
```

#### Named parameters

Use named argument to help structures your data. They can be placed in any order.

```dart
String assignNumber({
  String firstname = "John",
  String? lastname
}) {
  return "Hi, I'm $firstname $lastname";
};

assignNumber(lastname: "Doe"); // Hi, I'm John Doe
assignNumber(); // Hello, my name is John null
```

#### Required

You can make named parameters mandatory with `required`.

```dart
num addOne({required int number}) { return 1 + $number; };
addOne(); // Error: Required named parameter 'number' must be provided.
```

### Operators

#### Cascades

```dart
querySelector('#confirm')
..text = 'Confirm’
..classes.add('important')
..onClick.listen((e) => window.alert('Confirmed!'));
```

## Lists & Sets

[Lists](https://devdocs.io/dart~2/dart-core/list-class) are basically the same as array in other language.
[Sets](https://devdocs.io/dart~2/dart-core/set-class) are unordered collection of unique items.
Almost all methods apply for both concept.

```dart
List<int> list = [1,2,3]; // list of int
list.length; // 3
list[1]; // 2
list = [...list, 4]; // [1,2,3,4]

Set<int> set = {1,2,3}; // set of int
```

### Add stuff

```dart
// Spread operator
var list = [1,2,3];
list = [...list, 4]; // [1,2,3,4]
```

[add](https://devdocs.io/dart~2/dart-core/list/add) / [addAll](https://devdocs.io/dart~2/dart-core/list/addall)
```dart
// Appends items at the end of the list
final list = [1,2];
list.add(3);        // [1,2,3]
list.addAll([4,5]); // [1,2,3,4,5]
```

[insert](https://devdocs.io/dart~2/dart-core/list/insert) / [insertAll](https://devdocs.io/dart~2/dart-core/list/insertall)
```dart
// Insert at specific index
final list = [1,5];
list.insert(1,2);        // [1,2,5]
list.insertAll(2,[3,4]); // [1,2,3,4,5]
```

## Maps

```dart
var map = {
	"one": 1,
	"two": 2
}

print(map["one"]); // 1
```

## Classes

```dart
class Person {
	final String name;          // instance variable
	final String _greet = "Hi"; // private variable
	Person(this.name);          // constructor
	String greets() => "$_greet, my name is ${this.name}"; // method
}

var client = Person("John");
print(client.name);     // John
print(client.greets()); // Hi, my name is John
```

### Properties

Instance variables are class properties. They create implicit *getter* and *setter* methods, if they’re not `final`.

```dart
class Person {
  int? age;
  final String name;
  Person(this.name);
}

var client = Person("Alice");
var clientName = client.name; // getter for 'name'
client.age = 42;              // setter for 'age'
```

Instance variables can be `final`, but you have to use `static` with `const`

#### static

Variables (and methods) can be static: they don’t need to create an instance of the class to be used. It means it can’t use `this`.

```dart
class Person {
  static const name = "Alice";
  static String greets() => "Hi!";
}

print(Person.name);     // Alice
print(Person.greets()); // Hi!
```

### Methods

#### Getter & setter

Getter & setter methods are created along with [properties](#properties).

#### Constructors

You can create a constructor by writing a method with the same name as the class

```dart
class Person {
  final String firstname;
  final String lastname;
  
  Person(this.firstname, this.lastname); // constructor
}
```

You can expends the initializer to do some operations before instance is created

```dart
class Person {
  final String firstname;
  final String lastname;
  final String fullname;
  
  Person(this.firstname, this.lastname) {
    // …
  }
}
```

```dart
class Person {
  final String firstname;
  final String lastname;
  final String fullname;
  
  Person(String firstname, String lastname) :
  firstname = firstname,
  lastname = lastname,
  fullname = "$firstname $lastname";
}
```

#### Callable class

```dart
class Math { call(a,b) => a+b; }

var cal = Math();
print(cal(1,2)); // 3
```

#### Implementation

```dart
// ABSTRACT: Interface (can't be instantiated)
abstract class Animal { void makeSound(); }

// IMPLMENTS
class Dog implements Animal {
  @override // annotate element overriding
	String makeSound() => "wuf";
}

// MIXIN: reuse variables and methods
mixin Tamed {
  String? name;
	String pet() => "You pet $name";
}

// EXTENDS class with mixins
class Pug extends Dog with Tamed {
  Pug(name){this.name = name;}
}

void main() {  
  var dog = Pug("Cookie");
  print(dog.makeSound()); // wuf (from Dog class)
  print(dog.pet());       // You pet Cookie (from Tamed mixin)
}
```

## Errors handling

```dart
// BOOLEAN
assert(2 < 1); // False: error raised (Assertion failed)

// TRY CATCH
try {
  someFunction();
} on SpecificException catch (err) {
  print("Specific error: $err");
} catch (err) {
  print('Unkown error: $err');
} finally {
  backupFunction();
}
```

## Good to know

- In Dart, everything that is placed in a variable is an object

## Packages & Modules

```dart
import 'package:flutter/material.dart'; // import package
import dart:core;                       // import built-in library
import '../path/lib.dart';              // import custom library

import 'lib' show foo;                  // import only foo
import 'lib' hide bar;                  // import all but bar
```

### Packages

```bash
dart pub add  # add package (add line to pubspec.yaml)
dart pub get  # get packages according to pubspec.yaml
```

### Libraries

#### Built-in library

[A tour of the core libraries](https://dart.dev/guides/libraries/library-tour) – Dart website

#### Custom library

- External library → lib from external packages
- Local library → lib defined inside the entrypoint package

## Resources

- [github.com/dart-lang/sdk](https://github.com/dart-lang/sdk) – Github repo
- [dart.dev](https://dart.dev) – Official website
- [pub.dev](https://pub.dev/) – Package repo
- [devdocs.io/dart~2](https://devdocs.io/dart~2/) – Devdoc page
- [dartpad.dev](https://dartpad.dev/) – Online editor
