---
title: Function scope - another example and exercises 👈
questions:
  - multiple-choice/function-scope-01
  - multiple-choice/function-scope-02
---

In the sample code below, `add_five()` function has one "local" variable - `x`. The code below will print `x inside function: 1`. When `add_five(1)` is run, `x` is created and initialized to `1`. Once the function finishes running, `x` is destroyed.

```python
def add_five(x):
  print(f'x inside function: {x}')
  # Prints 'x inside function: 1'

  return x + 5

add_five(1)
```

What happens if you try to print the value of `x` outside the function?

```python
def add_five(x):
  print(f'x inside function: {x}')
  # Prints 'x inside function: 1'

  return x + 5

add_five(1)

print(x)
# Python throws an error - NameError: name 'x' is not defined
```

Python throws an error 🚫 since `x` is already destroyed! Remember, function arguments reside in the local environment of the function and are destroyed once the function finishes running.
