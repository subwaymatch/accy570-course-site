---
title: Removing pesky whitespaces 🪒
questions:
  - multiple-choice/string-strip-01
  - multiple-choice/string-strip-02
  - python-coding/string-strip-03
---

To convert a string to all lowercase, use the `lower()` method.

```python
my_str = 'Balance Sheet'
print(my_str.lower())
# Prints 'balance sheet'
```

To convert a string to all uppercase, use the `upper()` method.

```python
my_str = 'Balance Sheet'
print(my_str.upper())
# Prints 'BALANCE SHEET'
```

Note that both `lower()` and `upper()` methods return new strings without modifying the original string.

```python
name = 'XuYaDoNg'

print(name.upper())
# Prints 'XUYADONG'

print(name)
# Prints 'XuYaDoNg'
# The original string remains unchanged!
```
