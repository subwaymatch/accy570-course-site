---
title: Updating a single value 🎣
---

You can also use the `iat` method to change a single value.

```python
applicants = [
    [1, 337, 4.0],
    [2, 324, 4.0],
    [3, 316, 3.3]
]

df_applicants = pd.DataFrame(applicants)

print(df_applicants.iat[2, 2]) # Prints 3.3

# Applicant 3's GPA drops to 2.0 :(
df_applicants.iat[2, 2] = 2.0

print(df_applicants.iat[2, 2]) # Prints 2.0
```

In general, you won't need to change single values. Usually, you will operate on a column or multiple columns at once. If you're going to alter data (for example, fix an error), you should do so at the source.
