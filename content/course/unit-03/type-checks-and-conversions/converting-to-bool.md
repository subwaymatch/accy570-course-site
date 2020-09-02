---
title: Converting to a boolean
---

Use `bool()` function.

`int` → `bool` and `float` → `bool`

**Rule**: Values `0` or `0.0` will be converted to `False`. Any other numeric value will be converted to `True`.

```python
# Prints True
print(bool(2))

# Prints True
print(bool(-12))

# Prints True
print(bool(2.123))

# Prints False
print(bool(0))

# Prints False
print(bool(0.0))
```

`str` → `bool`

**Rule**: Empty strings will be converted to `False`. Any other string values will be converted to `True`.

```python
# Prints False
print(bool(''))

# Prints False
print(bool(""))

# Prints True (be aware!)
print(bool("False"))

# Prints True
print(bool("  "))

# Prints True
print(bool("My make-up brush"))
```
