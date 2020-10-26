---
title: Selecting specific columns 🧬
---

The syntax to select specific columns is:

```python
column_subset = ['First Column', 'Another Column']
df[column_subset]

# Equivalent to
df[['First Column', 'Another Column']]
```

Let's take a look at an example. We'll use the file `US_graduate_admissions_cleaned.csv`.

```python
df = pd.read_csv('US_graduate_admissions_cleaned.csv')
```

Our data (first 5 rows without row indices):

| Applicant ID | GPA | GRE Score | TOEFL Score | University Rating | SOP | LOR | Research | Chance of Admit |
| ------------ | --- | --------- | ----------- | ----------------- | --- | --- | -------- | --------------- |
| 1            | 4   | 337       | 118         | 4                 | 4.5 | 4.5 | 1        | 0.92            |
| 2            | 4   | 324       | 107         | 4                 | 4   | 4.5 | 1        | 0.76            |
| 3            | 3.3 | 316       | 104         | 3                 | 3   | 3.5 | 1        | 0.72            |
| 4            | 3.7 | 322       | 110         | 3                 | 3.5 | 2.5 | 1        | 0.8             |
| 5            | 3.7 | 314       | 103         | 2                 | 2   | 3   | 0        | 0.65            |

```python
columns_to_select = ['Applicant ID', 'GPA', 'GRE Score']
df[columns_to_select]

# Equivalent to df[['Applicant ID', 'GPA', 'GRE Score']]
```
