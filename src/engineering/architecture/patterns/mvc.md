---
aliases: [Model-View-Controller, HMVC, MVA, MVP, MVVM]
tags: []
---

# MVC

[Model-View-Controller](https://wikipedia.org/wiki/model%e2%80%93view%e2%80%93controller) is a design pattern to develop user interface in three interconnected components.

![MVC representation](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/mvc-process.svg/400px-mvc-process.svg.png)
Keep in mind that MVC is *not* a [layered architecture](../styles/layered.md) (where each layer can communicate only with the one above or under).

## Component

### Model

- Describe data **state**, structure and behaviour
- Handle data access and modification
- Independent from the View and Controller
- Notify the View of changes ([observer](observer.md))

### View

- Presentation layer: **display** the data to the end-user
- Requests update from the Model
- Send user's actions to the Controller

### Controller

- Connects end-users to the **application**
- Handle inputs and requests, converts it to commands
- Update the Model according to user's actions
- Chose the View to respond with
- Can handle several Views.
- Dependent of View and Model

## Variants and alternatives

### MVP

In [Model-View-Presenter](https://wikipedia.org/wiki/model%e2%80%93view%e2%80%93presenter), a Presenter is the bridge between the View and the Model.

- Presenter can handle only one View (in contrast with a Controller)
- Presenter listen to both View and Model
- Views must implement an interface to interact with its Presenter

![MVP representation](https://upload.wikimedia.org/wikipedia/commons/d/dc/model_view_presenter_gui_design_pattern.png)

### MVVM

In [Model-View-ViewModel](https://wikipedia.org/wiki/model%e2%80%93view%e2%80%93viewmodel), a ViewModel bind data between View and Model, instead of using an event-listener system. It is easier to implement and test, but it can lead to code complexity and can be memory-costy.

![MVVM schema](https://upload.wikimedia.org/wikipedia/commons/8/87/mvvmpattern.png)
