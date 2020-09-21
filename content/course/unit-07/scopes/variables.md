---
title: Function scope - variables 🪐
questions:
  - multiple-choice/function-scope-03
  - multiple-choice/function-scope-04
  - multiple-choice/function-scope-05
---

Recall from the previous page that a function gets its own environment (or a scope) when it's called. All variables defined inside the function are _function-scoped._ They will be destroyed when the function completes.

The code below will throw an error when it tries to print `y` since `y` is destroyed once the `double_that(10)` finishes running.

```python
def double_that(x):
  y = x * 2
  print(y)

double_that(10)
# Prints 20

print(y)
# Python throws an error
# NameError: name 'y' is not defined
```

While Python's function has function scope, it can "see" variables in the _global_ scope 🌎. The global scope refers to the global environment (i.e., not inside a function).

```python
# global_three is in the global scope
global_three = 3

def print_global_three():
  # Python is able to see the global scope inside a function
  print(global_three)

print_global_three()
# Prints 3
```

Note that a function cannot change a variable in the global environment. If it tries, Python makes a local copy of the global variable.

```python
# global_num is in the global scope
global_num = 3

def print_global_num():
  # Creates a local global_num without changing the global global_num
  global_num = 100

  # Python is able to see the global scope inside a function
  print(global_num)

print_global_num()
# Prints 100

print(global_num)
# Prints 3
# global_num in the global scope remains unchanged
```
