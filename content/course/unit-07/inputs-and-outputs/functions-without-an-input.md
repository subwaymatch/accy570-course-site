---
title: Functions without an input 🧞
questions:
  - multiple-choice/function-parameter-01
  - multiple-choice/function-parameter-02
---

A Python function's structure is similar to that of a function in mathematics. However, there are two notable differences.

- A Python function can be defined without inputs (i.e., no **parameter** or argument)
- A Python function can be defined without an output (i.e., no return value)

Both the arguments (inputs) and return values (outputs) are optional in Python.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/functions-diagram-optional-io.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/functions-diagram-optional-io.png)

Below is an example of a function without an argument (input). Note that the function definition has an empty set of parentheses following the function name `get_course_number()`.

```python
# Input: no input
# Output: int
def get_course_number():
	return 570
```
