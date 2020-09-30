---
title: An easier way to create bins 🐰
---

Calculating the `counts` seems so complicated. Is there an easier way to create bins? 🙉 We can import an awesome package called NumPy that provides a `histogram()` function. It automatically calculates the counts and edges for you.

```python
import numpy as np
hist = np.histogram(mydata, bins=numbins)
```

The result is a tuple where the first element is the counts and the second element is the edges.

```python
counts = hist[0]
edges = hist[1]
```
