---
title: Retrieving a single value with custom labels 🧭
---

- Before, we showed you the `iat` method, which uses integer-based index to retrieve or set a value.
- If you have custom indices, it's often easier to use the `at` method.
- At the right, create another example, this time using custom column names and the `at` method.

Our `DataFrame`:

|     |     Name | Ticker |  Price |
| --: | -------: | -----: | -----: |
|   0 |  Walmart |    WMT | 119.14 |
|   1 |   Target |    TGT | 112.81 |
|   2 | Best Buy |    BBY |  70.52 |

Using the `at` method:

```python
print(df_stocks.at[0, 'Name'])   # Prints 'Walmart'
print(df_stocks.at[0, 'Ticker']) # Prints 'WMT'
print(df_stocks.at[1, 'Name'])   # Prints 'Target'
print(df_stocks.at[1, 'Price'])  # Prints 112.81
print(df_stocks.at[2, 'Price'])  # Prints 70.52
```
