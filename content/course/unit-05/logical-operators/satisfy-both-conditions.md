---
title: Satisfy both conditions
questions:
  - python-coding/logical-operator-and-01
  - multiple-choice/logical-operator-and-01
  - multiple-choice/logical-operator-and-02
---

**first_condition `and` second_condition**

`True` if _both_ conditions are satisfied, `False` if _any one_ of the two conditions is not satisfied

```python
year = 2020
revenue = 80000

(year > 2019) and (revenue > 70000)   # True - both conditions are satisfied

(year > 2022) and (revenue > 70000)   # False - first condition is NOT satisfied

(year > 2022) and (revenue > 90000)   # False - both conditions are NOT satisfied
```
