---
title: Create a box plot in Bokeh 🟩
---

Calculate the min, Q1, Q2 (median), Q3, and max of the data using `min()`, `max()`, and `np.quantile()` functions.

The `quantile()` method from NumPy calculates any percentile for the data (e.g., 8th percentile, 25th percentile, etc.).

```python
import numpy as np

datamax = max(mydata)
datamin = min(mydata)
Q1 = np.quantile(mydata, 0.25)
Q2 = np.quantile(mydata, 0.50)
Q3 = np.quantile(mydata, 0.75)
```

Once all of the variables are calculated, you can create the figure in Python. Let's walk through the class notebook with example code 🚶‍♀️.
