---
title: Why use lists?
---

Apple's cash balance for the last five fiscal years:

| Year | Ending Cash Balance |
| ---- | ------------------- |
|      | (in millions)       |
| 2019 | 48,844              |
| 2018 | 25,913              |
| 2017 | 20,289              |
| 2016 | 20,484              |
| 2015 | 21,120              |

We could store the information with variables

```python
# In millions
cash_2019 = 48844
cash_2018 = 25913
cash_2017 = 20289
cash_2016 = 20484
cash_2015 = 21120
```

This may work for simple tasks but gets quickly complicated. What if we need the cash balance for the past 20 years? We would need to create 20 separate variables. Instead of creating multiple variables, we could use two lists.

```python
# In millions
cash = [21120, 20484, 20289, 25913, 48844]
years = [2015, 2016, 2017, 2018, 2019]
```
