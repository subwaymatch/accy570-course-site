---
title: Getting first few, last few, or random rows 🔭
---

A few utility methods you will find useful (we'll try these out with a Jupyter notebook):

```python
df.head()     # Returns the first 5 rows
df.head(3)    # Returns the first 3 rows

df.tail()     # Returns the last 5 rows
df.tail(3)    # Returns the last 3 rows

df.sample(10) # Randomly select and return 10 rows
```
