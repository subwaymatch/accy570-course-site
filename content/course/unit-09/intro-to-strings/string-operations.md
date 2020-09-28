---
title: String operations 🛠
questions:
  - python-coding/string-operations-01
  - python-coding/string-operations-02
  - python-coding/string-operations-03
---

To join two strings, use the `+` operator.

```python
# With strings
s1 = 'Dontrell'
s2 = 'Brown'

print(s1 + s2)
# Prints 'DontrellBrown'
# Notice that there is no space in between the two joined strings

# With lists
l1 = [1, 2]
l2 = [3, 4]
print(l1 + l2)
# Prints [1, 2, 3, 4]
```

To repeat strings, use the `*` operator.

```python
# With a string
s = 'Hi'
print(s * 4)
# Prints "HiHiHiHi"

# With a list
l = [1, 2]
print(l * 4)
# Prints [1, 2, 1, 2, 1, 2, 1, 2]
```

To check whether a string contains a substring, use the `in` operator.

```python
# With a string
s = 'Chulin'
print('Chu' in s)
# Prints True

print('LIN' in s)
# Prints False (since LIN != lin in Python)

# With a list
l = ['A', 'B', 'C', 'D']
print('B' in l)
# Prints True

print('F' in l)
# Prints False
```
