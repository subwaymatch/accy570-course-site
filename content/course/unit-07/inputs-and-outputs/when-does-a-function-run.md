---
title: When does a function run? 🏃🏿‍♂️
questions:
  - multiple-choice/function-execution-order-01
  - multiple-choice/function-execution-order-02
---

What is the output of the code below?

```python
def double_it(x):
  result = x * 2

  print(result)
```

**There is no output 👺!** When you define a function, Python doesn't run it until you explicitly _call_ it. To call the `double_it` function, use the function call syntax.

```python
double_it(5)
# Prints 10
```
