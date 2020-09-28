---
title: Mixed types in operations
questions:
  - multiple-choice/arithmetic-operator-division-result-type-02
  - multiple-choice/arithmetic-operator-addition-result-type-01
---

When you add, subtract, or multiply two `int`s, the result will always be an `int` type.

```python
ten = 10
four = 4

ten + four   # 14 (int type)
ten - four   # 6 (int type)
ten * four   # 40 (int type)
```

When you divide an `int` by another `int`, the result will **always** be a `float`.

```python
ten = 10
four = 4

ten / four   # 2.5 (float type)
6 / 3        # 2.0 (float type)
```

If you operate on an `int` and a `float`, the result will always be a `float`.

```python
3 + 2.0 # 5.0
3 + 3.7 # 6.7
```

But Why?

- Python wants to keep the more "precise" type.
