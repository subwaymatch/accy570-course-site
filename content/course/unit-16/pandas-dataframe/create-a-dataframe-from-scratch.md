---
title: How to create a DataFrame from scratch 🍙
---

There are lots of ways to create a DataFrame. One way is to save your data in a list of lists and pass that to the `DataFrame` constructor. While this method is rarely used, we'll try this out to compare a Pandas `DataFrame` with an Excel table.

Let's create a `DataFrame` for the following data:

| Applicant ID | GRE | GPA |
| -----------: | --: | --: |
|            1 | 337 | 4.0 |
|            2 | 324 | 4.0 |
|            3 | 316 | 3.3 |

```python
# List of lists
applicants = [
    [1, 337, 4.0],
    [2, 324, 4.0],
    [3, 316, 3.3]
]

df_applicants = pd.DataFrame(applicants)
```

Output:

|     |   0 |   1 |   2 |
| --: | --: | --: | --: |
|   0 |   1 | 337 | 4.0 |
|   1 |   2 | 324 | 4.0 |
|   2 |   3 | 316 | 3.3 |

- Note that the rows and columns are both labeled 0, 1, and 2.
- Since we did not tell Pandas which labels to use, it auto-numbered the rows and columns.
- Remember, indices in Python are zero-based! 🪁

Here is a comparison of a `DataFrame` and an Excel table using the `applicants` data.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/dataframe-vs-excel-table-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/dataframe-vs-excel-table-01.png)
