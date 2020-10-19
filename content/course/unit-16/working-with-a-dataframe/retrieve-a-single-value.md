---
title: Retrieving a single value 🥍
---

- You can access a single cell in the `DataFrame` using the `iat` method.
- Notice that `iat` uses square brackets.
- The first argument is the row index.
- The second argument is the column index.

Using the following `DataFrame`:

|     |   0 |   1 |   2 |
| --: | --: | --: | --: |
|   0 |   1 | 337 | 4.0 |
|   1 |   2 | 324 | 4.0 |
|   2 |   3 | 316 | 3.3 |

```python
applicants = [
    [1, 337, 4.0],
    [2, 324, 4.0],
    [3, 316, 3.3]
]

df_applicants = pd.DataFrame(applicants)

print(df_applicants.iat[0, 0]) # Prints 1
print(df_applicants.iat[0, 1]) # Prints 337
print(df_applicants.iat[2, 2]) # Prints 3.3
print(df_applicants.iat[3, 4]) # Throws an IndexError
```
