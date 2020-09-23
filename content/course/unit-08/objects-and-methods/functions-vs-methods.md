---
title: Functions vs Methods 🚴🏽
---

There is a special class of functions called _methods_. Methods _are_ functions, but they are called differently. To understand the difference, we need to teach you (just a little) about _objects_.

### What's an object?

In programming, an object is an entity that has _state_ and _behavior_. Imagine you're writing a video game and want to program a dog.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/husky-with-a-newspaper.jpg](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/husky-with-a-newspaper.jpg)

You need to define the dog's _states_ and _behaviors_.

| State  | Behaviors     |
| ------ | ------------- |
| name   | bark          |
| height | run           |
| weight | bite          |
| color  | eat           |
| age    | get newspaper |

The programmer can put the code that implements a dog into a dog object. Object behaviors are implemented as functions. **A function that belongs to an object is called a method.** To call a method, use `object_name.method_name()` format.

```python
# function
max(5, 4, 3)

# method
some_list.append(17)
```
