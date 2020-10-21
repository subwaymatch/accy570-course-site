---
title: Pandas String functions 🧶
---

- Pandas provides many useful functions for working with strings (see [here](https://pandas.pydata.org/pandas-docs/stable/user_guide/text.html)).
- The string functions are similar to Python's built-in string functions.
- The basic idea is to perform the same string operation on EVERY value of a column, without using a `for` loop.

Example of replacing the dollar sign in every string value in the `Closing Price` column.

```python
df['Closing Price'] = df['Closing Price'].str.replace('$', '')
```
