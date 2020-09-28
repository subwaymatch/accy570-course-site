---
title: Satisfy either (at least one) condition
questions:
  - python-coding/logical-operator-or-01
  - multiple-choice/logical-operator-or-01
  - multiple-choice/logical-operator-or-02
---

**first_condition `or` second_condition**

`True` if _any_ one of the two conditions is satisfied, `False` if _both_ conditions are not satisfied

```python
year = 2020
revenue = 80000

# The parentheses are optional
# I use them here to increase readability

(year > 2019) or (revenue > 70000)   # True - both conditions are satisfied

(year > 2022) or (revenue > 70000)   # True - although first condition is NOT satisfied,
                                     # second condition is satisfied

(year > 2022) or (revenue > 90000)   # False - both conditions are NOT satisfied
```
