---
title: Function scope and global variables 🪐
questions:
  - multiple-choice/function-scope-03
  - multiple-choice/function-scope-04
  - multiple-choice/function-scope-05
---

While a function has its own scope, it can "see" variables in the _global_ scope 🌎. The global scope refers to the global environment (i.e., not inside a function).

```python
global_one = 'Madison'
global_two = 'Kevin'

def add_three(x):
    print(global_one)
    # global_one is not in the function scope,
    # but can be found in the global scope!

    y = x + 3
    return y

add_three(10)
# Prints 'Madison'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-05.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-05.png)

Note that a function cannot change a variable in the global environment. If Python sees an assignment operation on a global variable, it will create a new local variable in the function scope. The two variables have the same name, but are completely separate.

```python
global_one = 'Madison'
global_two = 'Kevin'

def add_three(x):
    global_one = 'Geoff'

    y = x + 3
    return y

add_three(10)

print(global_one)
# Prints 'Madison'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-06.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-06.png)
