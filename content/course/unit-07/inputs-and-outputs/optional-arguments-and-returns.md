---
title: Functions without arguments or return values 🧞
questions:
  - multiple-choice/function-parameter-01
  - multiple-choice/function-return-value-02
  - multiple-choice/function-parameter-02
  - multiple-choice/function-return-value-03
---

A Python function's structure is similar to that of a function in mathematics. However, there are two notable differences.

- A Python function can be defined without inputs (i.e., no **parameter** or argument).
- A Python function can be defined without an output (i.e., no return value).

Both the arguments (inputs) and return values (outputs) are optional in Python.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/functions-diagram-optional-io.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/functions-diagram-optional-io.png)

Below is an example of a function without an argument (input). Note that the function definition doesn't have any inputs inside the parentheses following the function name `get_course_number()`.

```python
# Input: no input
# Output: int
def get_course_number():
  return 570
```

A Python function could also not have any return value. Instead, they can simply perform some tasks. The `print_name()` function below prints the name and **does NOT return a value**.

```python
# Input: str
# Output: no output
def print_name(name):
  print(name) # This is different from returning the name
              # This simply prints the value instead of returning it

func_result = print_name('Seung Jun')
```
