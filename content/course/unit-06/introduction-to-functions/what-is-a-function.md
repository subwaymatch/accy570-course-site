---
title: What is a function?
---

Let's forget about Python for a moment and go back a few years all the way back to Algebra. Do you remember any expressions that resemble the form of `f(x) = x + 3`? `f(x) = x + 3` is a _function_. For any given `x`, the function will add `3` to `x` and return that value.

- `f(5) = 5 + 3`, returns `8`
- `f(10) = 10 + 3`, returns `13`
- `f(-3) = 3 + 3`, returns `0`

In mathematical terms, a function takes one or more inputs and produces an output. Our previous function `f(x) = x + 3` can be broken down into:

![Function Breakdown](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-breakdown-01.png)

`f` in front of the parentheses is an arbitrary name used to represent a function. We can choose to rename our function to `add_three`. This changes our function expression to `add_three(x) = x + 3`.

In Python, our `add_three` function is written as:

```python
def add_three(x):
	return x + 3
```

Don't worry about the details of the syntax just yet. You will get a chance to write functions plenty of times.

A function can also take more than one input (e.g., `add(a, b) = a + b`).

```python
def add(a, b):
	return a + b
```

In programming, an inputs is referred as an _argument_, and an output is referred as a _return value_.

![Function Diagram](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagram-01.png)
