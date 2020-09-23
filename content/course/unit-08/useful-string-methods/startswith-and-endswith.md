---
title: Startswith and endswith 📐
questions:
  - multiple-choice/string-startswith-01
  - multiple-choice/string-endswith-01
---

There are some cases where you want to check whether a string starts or ends with a certain substring. There are two methods - `startswith()` and `endswith()` that precisely handle these cases. Both of these methods _always_ return boolean values (`True` or `False`)

`startswith()` tells you whether your string starts with a given substring.

```python
s = 'Balance Sheet'
print(s.startswith('Bal'))
# Prints True

print(s.startswith('Income'))
# Prints False
```

`endswith()` tells you whether your string ends with a given substring.

```python
s = 'Balance Sheet'
print(s.endswith('Sheet'))
# Prints True

print(s.endswith('Statement'))
# Prints False
```
