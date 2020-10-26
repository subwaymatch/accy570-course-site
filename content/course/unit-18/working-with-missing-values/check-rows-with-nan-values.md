---
title: Check which rows have NaN values 🪒
---

Two functions:

- `df['Column Name'].isna()` returns a `Series` of `bool` values. It returns `True` if `NaN`, and `False` otherwise.
- `df['Column Name'].notna()` does the opposite of `isna()`. It returns `False` if `NaN`, and `True` otherwise.

Useful tip: You can count the number of `NaN` values by running `df['Column Name'].isna().sum()`.
