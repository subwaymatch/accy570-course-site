---
title: Syntax for writing functions 👨🏻‍💻
---

- A function definition begins with the keyword `def`.
- The next symbol is the name of your function.
- Function names have same rules as for naming variables.
- Arguments (inputs) are enclosed in parentheses, separated by commas.
- End the definition line with a colon (`:`).
- The body of your function must be indented (similar to `for`/`while` loops).
- Use the `return` keyword to return a value.
- Returning a value with a `return` keyword is optional. A Python function can perform some tasks without returning a value.

```python
def print_hello():
  print('Hello World')

print_hello() # 'Hello World'
```

```python
def my_average(x, y):
  return (x + y) / 2
```

After the exercises, we will use Jupyter Lab together to practice how to write functions.
