---
title: 'Example: Auto Dataset (Python) 🛺'
---

Python Code:

```python
import statsmodels.api as sm
import statsmodels.formula.api as smf

results = smf.ols('mpg ~ weight + C(origin)', data=df).fit()
print(results.summary())
```

- Notice the `C()` around `origin`.
- The `C()` operator tells `statsmodels` to treat the variable as categorical.
