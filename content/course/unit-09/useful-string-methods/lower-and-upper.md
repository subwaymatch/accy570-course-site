---
title: Lower 👇 and upper 👆🏾
questions:
  - multiple-choice/string-upper-lower-01
  - multiple-choice/string-upper-lower-02
  - python-coding/string-upper-lower-03
---

To convert a string to all lowercase, use the `lower()` method.

```python
my_str = 'Balance Sheet'

print(my_str.lower())
# Prints 'balance sheet'

my_str_lowered = my_str.lower()
print(my_str_lowered)
# Prints 'balance sheet'

# BE AWARE!
print(my_str)
# Prints 'Balance Sheet'
# The original string remains unaltered

# To alter the original string,
my_str = my_str.lower()
print(my_str)
# Prints 'balance sheet'
```

To convert a string to all uppercase, use the `upper()` method.

```python
my_str = 'Balance Sheet'

print(my_str.upper())
# Prints 'BALANCE SHEET'

my_str_uppered = my_str.upper()
print(my_str_uppered)
# Prints 'BALANCE SHEET'

# BE AWARE!
print(my_str)
# Prints 'Balance Sheet'
# The original string remains unaltered

# To alter the original string,
my_str = my_str.upper()
print(my_str)
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
