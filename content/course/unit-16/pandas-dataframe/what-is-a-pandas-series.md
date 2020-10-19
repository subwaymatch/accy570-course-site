---
title: What is a Pandas Series? 🐑
---

To understand how `DataFrame`s work, we first need to discuss `Series` as they are the building blocks of Pandas `DataFrame`s. Think of a `Series` as a Python `list`. In fact, you can create a Pandas `Series` from a Python `list` using `pd.Series()`.

```python
gre_scores_list = [337, 324, 316, 322]
gre_scores_series = pd.Series(gre_scores_list)

print(gre_scores_series)

# Prints
# 0    337
# 1    324
# 2    316
# 3    322
# dtype: int64
```

Remember, a `Series` is a column in a `DataFrame`. The `DataFrame` below is a group of `Series`.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pandas-dataframe-example-02-series-and-df.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pandas-dataframe-example-02-series-and-df.png)
