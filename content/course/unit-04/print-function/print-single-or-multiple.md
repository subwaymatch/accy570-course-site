---
title: Print single or multiple values
---

So far, we have used `type()` to check the data type of a variable. You can also use `type()` to check the data types of _values_ or _expressions_.

```python
# Values
print(type(7))       # Outputs <class 'int'>
print(type(7.2))     # Outputs <class 'float'>
print(type('0.625')) # Outputs <class 'str'>

# Expressions
print(type(5 > 3))   # Outputs <class 'bool'>
print(type(10 + 20)) # Outputs <class 'int'>

# Variables
weekday = 'Wednesday'
print(type(weekday)) # Outputs <class 'str'>
```
