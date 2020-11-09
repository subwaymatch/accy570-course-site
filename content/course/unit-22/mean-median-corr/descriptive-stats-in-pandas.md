---
title: Descriptive Stats in Pandas 🐼
---

For a series `S` (remember, a column of a `DataFrame` is a `Series`):

- Mean: `s.mean()`
- Median: `s.median()`
- Standard deviation: `s.std()`

For a DataFrame `df`:

- Correlation: `df.corr()`
- Usually, you only want the correlation between certain columns: `df[['Col1', 'Col3', 'Col5']].corr()`.
