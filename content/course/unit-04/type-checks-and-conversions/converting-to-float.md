---
title: Converting to a float
questions:
  - multiple-choice/convert-bool-to-float-01
  - multiple-choice/convert-str-to-float-01
  - multiple-choice/convert-str-to-float-02
---

Use `float` function.

`int` → `float`

```python
# Prints 2.0
print(float(2))

# Prints -12.0
print(float(-12))
```

`bool` → `float`

- `True` will convert to `1.0`
- `False` will convert to `0.0`

```python
# Prints 1.0
print(float(True))

# Prints 0.0
print(float(False))
```

`str` → `float`

Python will perform the conversion if it makes sense. It will throw an error otherwise.

```python
# Prints -42.0
print(float("-42"))

# Prints -42.5
print(float("-42.5"))

# Throws an error
print(float("Text"))
```
