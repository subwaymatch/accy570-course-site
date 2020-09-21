---
title: Variable scope 🕶
---

In Python, every variable belongs to a _scope_. A _scope_ is an _environment_ that contains a set of variables. Here, we cover two types of *scope*s.

**Global Scope**

Any variable that is declared outside of the function is in the global scope. A variable in the global scope is called a **global variable**. Both `global_one` and `global_two` variables in the code below are examples of global variables. In fact, most of the variables we have created so far are global variables.

```python
global_one = 'Madison'
global_two = 'Kevin'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/global-scope-example-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/global-scope-example-01.png)

**Function Scope**

Any variable that is used inside a function is in the function scope. A variable in the function scope is called a _local variable_. When a function is called, a function scope for that function is created. The function scope includes both the arguments of the function and any variables created inside the function.

```python
def add_three(x):
    y = x + 3
    return y

global_one = 'Madison'
global_two = 'Kevin'

# When add_three() is called, a new function scope is created
add_three(10)
# Once add_three() finishes running, the newly created function scope is destroyed
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-02.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-02.png)

What happens if you try to print the value of `x` or `y` outside the function?

```python
def add_three(x):
    y = x + 3
    return y

add_three(10)

print(x)
# Throws a NameError: name 'x' is not defined
# x is already destroyed!

print(y)
# Throws a NameError: name 'y' is not defined
# y is already destroyed as well!
```

Python throws an error 🚫 since `x` is already destroyed! Remember, function arguments reside in the local environment of the function and are destroyed once the function finishes running.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-03.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/function-scope-example-03.png)
