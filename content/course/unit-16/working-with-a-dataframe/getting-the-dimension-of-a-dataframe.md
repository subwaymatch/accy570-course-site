---
title: Getting the dimensions 📏 of a DataFrame
---

- A `DataFrame` has rows and columns.
- Use the `shape` property of a `DataFrame` to get the number of rows and columns
- `shape` returns a tuple (remember these).
- The first number of the tuple is the number of rows.
- The second number of the tuple is the number of columns.

Given the following `DataFrame`:

|     |    Name | Ticker |  Price |
| --: | ------: | -----: | -----: |
|   0 | Walmart |    WMT | 119.14 |
|   1 |  Target |    TGT | 112.81 |

```python
print(df_stocks.shape) # Prints (2, 3)
```
