---
title: Row indices 🗄
---

- As with column indices, it is possible to set custom row indices.
- This is useful for time-series data. You use the timestamp as the row index. If you do that, it's easier to slice by time, or to plot your data.
- Often, for accounting data, it's not worth the hassle and most people just use the auto-numbered row indices.
- You can retrieve the row indices by using the index property of `DataFrame` (e.g., `print(df.index)`).
- You can set a custom index by passing a list to `df.index`, or by using the `rename` method.
