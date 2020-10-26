---
title: Subsetting columns - data type of the subset ⚱️
---

When you take a subset of the columns, Pandas returns a `DataFrame`.

```python
type(df_admission[['Applicant ID', 'GPA', 'GRE Score']])
# Returns pandas.core.frame.DataFrame

type(df_admission[['GPA']])
# Returns pandas.core.frame.DataFrame
```

Note that you will get a `Series` if you only select a single column without double brackets (`[[` and `]]`). If you use single square brackets, you are getting that specific column as a `Series`. Remember, every column in a `DataFrame` is a `Series`!

```python
# Notice the single square brackets (['GPA'] as opposed to [['GPA']])
type(type(df_admission['GPA'])
# Returns pandas.core.series.Series
```
