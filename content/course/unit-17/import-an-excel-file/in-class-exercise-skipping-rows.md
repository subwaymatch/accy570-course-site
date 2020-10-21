---
title: 'In-class Exercise: Skipping Rows 🦿'
---

- Sometimes, there is information in the first rows of an Excel file, before the header row, and before the data.
- By default, `pd.read_excel()` assumes the first row of data contains the column names.
- Use the file `excel-04-unneeded-rows.xlsx`.
- Supply the `skiprows` parameter to skip first n rows or certain rows.

```python
# First, see what happens
df_games = pd.read_excel('excel-04-unneeded-rows.xlsx')
df_games
```

```python
# Skip rows 0, 1, 2 (remember, indices are zero-based!)
df_games = pd.read_excel('excel-04-unneeded-rows.xlsx', skiprows=[0, 1, 2])
df_games
```

```python
# Or, skip the first 3 rows
df_games = pd.read_excel('excel-04-unneeded-rows.xlsx', skiprows=3)
df_games
```
