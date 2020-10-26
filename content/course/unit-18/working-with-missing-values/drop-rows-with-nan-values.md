---
title: Dropping rows with NaN values 🦷
---

Pandas has a great function called `dropna()`. It allows you to drop all rows that have missing values. Note that it will return a **COPY** of the new `DataFrame` with dropped rows.

```python
# Drops all rows with `NaN` values in any column
df.dropna()

# Drops rows with `NaN` values in columns x and y
df.dropna(subset=['x', 'y'])
```
