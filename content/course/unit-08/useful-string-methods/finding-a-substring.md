---
title: Find a substring within your string 🔍
questions:
  - multiple-choice/string-find-01
---

To search for a substring within your string, use the `find()` method. If the substring exists, `find()` returns the index (zero-based) of the _first_ occurrence of the substring. If the substring does not exists, `find()` returns `-1`.

```python
brands_str = "Nike+Reebok+FILA+Vans"

# Nike is in brands_str
print(brands_str.find('Nike'))
# Prints 0

# How about "ike"?
print(brands_str.find('ike'))
# Prints 1

# Adidas is not in brands_str!
print(brands_str.find('Adidas'))
# Prints -1
```
