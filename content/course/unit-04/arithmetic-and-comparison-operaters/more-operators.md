---
title: More arithmetic operators
questions:
  - python-coding/arithmetic-operator-floor-division-01
  - python-coding/arithmetic-operator-mod-01
  - python-coding/arithmetic-operator-exp-01
  - python-coding/arithmetic-operator-mod-02
---

There are three more arithmetic operators.

**Floor Division**

`//` is a floor division operator. It only keeps the whole number amount and discards the fractional amount. Note that the result will be a `float` type if any of the two operands is a `float` type.

```python
# Floor division
7 // 2     # 3
13 // 5.0  # 2.0
100 // 25  # 57
3.72 // 1  # 3.0
5 // 6     # 0
```

**Modulus (remainder)**

`%` is a modulus operator. It performs a division and only keeps the remainder.

```python
# Modulus (remainder)
7 % 2     # 1
13 % 5.0  # 3
100 % 25  # 0
3.72 % 1  # 0.72
```

**Exponentiation**

`**` is an exponentiation operator. It calculates the exponential of two values. x \*\* y = x^y. Note that the result will be a `float` type if any of the two operands is a `float` type.

```python
5 ** 2    # 25
5.0 ** 2  # 25.0
10 ** -1  # 0.1
-3 ** 3   # -27
```
