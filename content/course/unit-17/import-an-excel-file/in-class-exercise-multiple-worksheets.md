---
title: 'In-class Exercise: Multiple Worksheets'
---

- By default, `pd.read_excel()` reads data from the first worksheet.
- Use the file `excel-02-multiple-sheets.xlsx`.
- Often, there are multiple worksheets.
- By supplying a `sheet_name` parameter to the `pd.read_excel()` function, we can retrieve a specific worksheet.
- Your job is to load data from the worksheet "Top 20" into Pandas.

```python
# First, try to read the workbook without the sheet_name parameter
df_games = pd.read_excel('excel-02-multiple-sheets.xlsx')
df_games
```

```python
# What we want is the "Top 20" worksheet!
df_games = pd.read_excel('excel-02-multiple-sheets.xlsx', sheet_name='Top 20')
df_games
```
