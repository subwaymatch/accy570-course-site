---
title: Booleans
questions:
  - python-coding/create-boolean-variable
  - python-coding/create-boolean-variable-and-print-type
---

Are you taking ACCY 501 this semester? The answer would be either yes or no (there's no in-between). A Boolean value is used to represent yes or no. In programming, yes equates to `True`, and no equates to `False`.

A Boolean value can only be `True` or `False`. This may seem trivial, but it is SUPER important! It underlies many of the control flows we have seen so far.

Look at the code sample below:

```python
if 5 > 3:
  print('Duh. 5 is greater than 3')

# is equivalent to
if True:
  print('Duh. 5 is greater than 3')
```

Is 5 greater than 3? Yes. These types of comparison always return `True` or `False`. In other words, they will always be Booleans.

In fact, Python will always convert the conditions inside `if`/`elif` statements and `while` loops into Booleans.
