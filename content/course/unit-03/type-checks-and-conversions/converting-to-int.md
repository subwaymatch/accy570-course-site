---
title: Converting to an integer
questions:
  - multiple-choice/converting-bool-to-int
---

Use `int()` function.

`float` → `int`

Python will discard any fractional amount.

```python
# Prints 2
print(int(2.718))

# Prints -5
print(int(-5.2))
```

`bool` → `int`

- `True` converts to `1`
- `False` converts to `0`.

```python
# Prints 1
print(int(True))

# Prints 0
print(int(False))
```

`str` → `int`

Python will perform the conversion if it makes sense. It will throw an error otherwise.

```python
# Prints 42
print(int("42"))

# Throws an error
print(int("42.3"))

# Throws an error
print(int("cat"))
```
