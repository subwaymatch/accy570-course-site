---
title: 'In-class Exercise: Clean accounting number strings 💵'
---

- Use the file `stocks-accounting-format.csv`.
- Once you're done cleaning the string, convert the `Closing Price` column into a `float` type column using `astype(float)`.

```python
df['Closing Price'] = df['Closing Price'].astype(float)
```
