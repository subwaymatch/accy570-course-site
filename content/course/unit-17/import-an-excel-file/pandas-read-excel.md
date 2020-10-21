---
title: Pandas function to read Excel files 🗒
---

- Pandas has a function named `read_excel()`.
- It opens an Excel file, reads the data from a single worksheet, and returns a `DataFrame`.

```python
import pandas as pd

df = pd.read_excel('path/to/your/file.xlsx')
```

Let's do a demo in Jupyter notebook. Use the `excel-01-clean.xlsx` file.

```python
import pandas as pd

df_games = pd.read_csv('excel-01-clean.xlsx')
```
