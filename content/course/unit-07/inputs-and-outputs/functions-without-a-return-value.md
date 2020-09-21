---
title: Functions without a return value
questions:
  - multiple-choice/function-return-value-01
  - multiple-choice/function-return-value-02
  - multiple-choice/function-return-value-03
---

```python
# Input: str
# Output: no output
def print_name(name):
  print(name) # This is different from returning the name
              # This simply prints the value instead of returning it

name = print_name('Seung Jun')
print(f'Name: {name}')
# Prints 'Name: None'
```

Here is another similar example. What happens if store the result of `add_three_print()` into a new variable `result`?

```python
def add_three_print(x):
    y = x + 3
    print(y)

result = add_three_print(x)
print(f'result = {result}')
# Prints 'result = None'
```

Again, `add_three_print()` has no `return` keyword 🙄! `result` will once again be `None`. This is illustrated below.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagrom-no-return-value.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagrom-no-return-value.png)

To retrieve the result of `x + 3`, add a `return` statement at the end of your function. 🤹

```python
def add_three_return(x):
    y = x + 3
    return y

result = add_three_return(x)
print(f'result = {result}')
# Prints 'result = 8'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagrom-return-value.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-diagrom-return-value.png)
