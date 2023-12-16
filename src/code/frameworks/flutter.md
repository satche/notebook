# Flutter

Flutter is a [Dart](../languages/dart.md) framework to build mobile and desktop application from a single codebase.

```dart
import 'package:flutter/material.dart';

void main() {
	runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: Text("Hello World"));
  }
}
```

## Getting started

### Installation

Since installation procedures may vary across different platforms (Windows, OSX, Linux), it is best to refer to the official documentation for guidance: [Flutter installation](https://docs.flutter.dev/get-started/install)

It’s recommended to also [install the IDE Flutter plugins](https://docs.flutter.dev/get-started/editor?tab=vscode) for a better experience

### Initialization

```bash
$ flutter create <project-name>
$ cd <project-name>
$ flutter run
```

You can have a list of running devices with the `flutter devices` command. You also can have a diagnostic with `flutter doctor` command.

## Widgets

Widgets describes the configuration of an Element, like a blueprint. They are structured in the Widget tree, which can be rebuilt if there is changes.

Flutter website provides a useful [Widget catalog](https://docs.flutter.dev/development/ui/widgets).

### Stateless

`StatlessWidget` are immutables: their properties can’t change one initialized.

```dart
class Name extends StatelessWidget {
  final String name;
	const Name(this.name);

  @override
  Widget build(BuildContext context) {
    return Text(name);
  }
}
```

### Statefull

`StatefullWidget` maintains state that can change during the lifetime of the widget

```dart
// Init the Stateful Widget
class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

// Define the state component
class _CounterState extends State<Counter> {
  int _count = 0;

  void _changeValue() {
    setState(() { _count++; });
  }

  @override
  Widget build(BuildContext context) {
    // Display the state and the button to change it
    return GestureDetector(
      onTap: _changeValue,
      child: Text("$_count"),
    );
  }
}
```

## State management

In Flutter, the views always reflects the *Global State* of the app: changing state triggers a redraw of the user interface (*UI State*). Because of that, changing widget with a method is hard.

You can check the [BLoC](../libraries/bloc.md) library for better state management.

- [State management approches](https://docs.flutter.dev/data-and-backend/state-mgmt/options) – Flutter doc

### Lift state up

Use models to update and display current state's widget

```dart
void tapHandler(BuildContext context) {  
	var userModel = getUserModel(context);
	userModel.add(name);
}
```

### Inherited

Use `InheritedWidget` to efficiently pass data to children widgets. Keep in mind the class is immutable, which means you can't use `<Class>.of(context).value = newValue`.

```dart
class User extends InheritedWidget {
  final String name;

  // Constructor
  User({required this.name, required Widget child}) : super(child: child);

  // Inherited widget access method
  static User of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<User>()!;
  }

  @override
  // Method to update widget tree when the inherited widget is changed
  bool updateShouldNotify(InheritedWidget oldWidget) => name != oldWidget.name;
}
```

- [InheritedWidget class](https://api.flutter.dev/flutter/widgets/inheritedwidget-class.html) – Flutter API
- [Interactive Dartpad example](https://dartpad.dev/workshops.html?webserver=https://dartpad-workshops-io2021.web.app/inherited_widget&utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources)
- [Inherited Gist example](https://gist.github.com/satche/922d37113860453e3335f2340e6e3529) – Github

### Provider

Provider package is a general state for all the application, like the items added in a cart shop.

- `ChangeNotifier`
	- Class that can notify change.
	- Act like a watcher or observable.
	- `notifyListeners` method send notification every time it's called.
- `ChangeNotifierProvider`
	- Provide `ChangeNotifier` instances to descendants with `child`
	- Must be placed above widgets that need to access to it…
	- … but as low than possible in the structure of the application.
	- Use `MultiProvider` to provide to more than one class
- `Consumer`
	- Specify with notifier to access.
	- Place it as deep in the tree as possible to avoid rebuilding unchanged portions of UI.
- `Provider.of`
	- If you want to call a method without getting data
- [pub.dev/packages/provider](https://pub.dev/packages/provider) – Provider package
- [Simple app state management](https://docs.flutter.dev/data-and-backend/state-mgmt/simple) – Flutter doc
- [Provider shopper example](https://github.com/flutter/samples/tree/main/provider_shopper) – Github
- [Provider gist example](https://gist.github.com/satche/4d2da5bb9a17b709756e911474191218) – Github

## Routes

### Navigation 1.0

Navigation 1.0 is imperative: each screen handle the navigation to the next one.

#### Anonymous routes

`Navigator.push()` allow to “push” a view on front of the current one.

`Navigator.pop()` remove that view, showing the previous one.

```dart
FlatButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) {
        return NextView(); // View (widget) to push
      },
    ),
  },
);
//…
FlatButton(
  onPressed: () {
    Navigator.pop(context); // Return to previous view
  },
);
```

#### Named routes

You can name your routes by calling the `routes` parameter in `MaterialApp` and calling `Navigator.pushNamed`

```dart
MaterialApp(
  routes: {
    '/': (context) => HomeScreen(),
  }
)
// …
FlatButton(
  onPressed: () {
    Navigator.pushNamed(context, '/'); // Push named view
  },
);

```

#### Parameters routes

You can have more control on named route with the `onGenerateRoute` parameter. Use the [Uri class](https://devdocs.io/dart~2/dart-core/uri-class) to manipulate path. You can simulate route parameters with it.

```dart
// Handle '/users/:id'
onGeneratedRoute: (settings) {
  var uri = Uri.parse(settings.name);
  if (uri.pathSegments.length == 2 &&
      uri.pathSegments.first == 'user') {
    var id = uri.pathSegments[1];
    return MaterialPageRoute(builder: (context) => UserScreen(id: id));
  }
}
```

#### Pass arguments

You can pass arguments from one route to another, so it’s not uri-dependant.

First, you have to precise the arguments you want to receive from the previous route.

```dart
class UserArguments {
  final String name;
  UserArguments(this.name);
}

class UserView {
  // …
  @override
  Widget build(BuildContext context) {
     final args = ModalRoute.of(context)!.settings.arguments
        as UserArguments;

     return Text("name: ${args.name}");
  }
}
```

Then, you can define in the previous route the argument to pass

```dart
FlatButton(
  onPressed: () {
    Navigator.pushNamed(
      context,
      '/user',
      arguments: UserView("Alice")
    );
  },
);
```

### Navigation 2.0

Navigation 2.0 is declarative: external classes handle which screen to display. It’s more complex and solid than Navigation 1.0

> I didn’t write any documentation about Navigation 2.0 yet. But you can have a look at it with the following [Medium article](https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade), published by Flutter.

## Packages & Modules

```bash
$ flutter pub add <package-name> # add package (add line in pubspec.yaml)
$ flutter pub get                # get packages from pubspec.yaml 
```

```dart
import 'package:<package-name>/<package-name>.dart' // Import package
```

## Resources

### Documentation

- [github.com/flutter/flutter](https://github.com/flutter/flutter) – Github repo
- [flutter.dev](https://flutter.dev) – Official website
- [pub.dev](https://pub.dev/) – Package repo
- [flutlab.io/editor](https://flutlab.io/editor) – Online editor

### Packages

- [firebase.flutter.dev](https://firebase.flutter.dev/) – Official Firebase package

### Tutorials

- [Your first Flutter app](https://codelabs.developers.google.com/codelabs/flutter-codelab-first) – Google Codelabs