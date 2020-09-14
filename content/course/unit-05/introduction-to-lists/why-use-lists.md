---
title: Why use lists?
---

You want to track Apple's cash balance 💵 for last past five fiscal years.

<img src="https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/apple-cash-balance.png" alt="Apple's Cash Balance" style="border: 1px solid #ccc; " />

After digging through Apple's financial statements, you come up with the following table (in millions):

| Year | Ending Cash Balance |
| ---- | ------------------- |
| 2019 | 48,844              |
| 2018 | 25,913              |
| 2017 | 20,289              |
| 2016 | 20,484              |
| 2015 | 21,120              |

How can we store this information? We can store the information with variables:

```python
# In millions
cash_2019 = 48844
cash_2018 = 25913
cash_2017 = 20289
cash_2016 = 20484
cash_2015 = 21120
```

This may work for simple tasks but gets quickly complicated. What if we need the cash balance for the past 20 years? We would need to create 20 separate variables. Instead of creating multiple variables, we can use two lists to represent our data.

```python
# In millions
cash = [21120, 20484, 20289, 25913, 48844]
years = [2015, 2016, 2017, 2018, 2019]
```
