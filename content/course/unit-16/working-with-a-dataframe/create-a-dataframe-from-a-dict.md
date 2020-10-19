---
title: Creating a DataFrame from a Python dictionary 📙
---

You can create a `DataFrame` from a dictionary. That allows you to pass column names. For example:

```python
df_stocks = pd.DataFrame({
    'Name': ['Walmart', 'Target', 'Best Buy'],
    'Ticker': ['WMT', 'TGT', 'BBY'],
    'Price': [119.14, 112.81, 70.52]
})
```

This yields:

|     |     Name | Ticker |  Price |
| --: | -------: | -----: | -----: |
|   0 |  Walmart |    WMT | 119.14 |
|   1 |   Target |    TGT | 112.81 |
|   2 | Best Buy |    BBY |  70.52 |
