---
title: Regression in Python 📯
---

There are lots of available packages. We use `statsmodels`.

```python
import statsmodels.api as sm
import statsmodels.formula.api as smf

model = smf.ols('mpg ~ weight', data=df).fit()
print(model.summary())
```

- Notice the formula `mpg ~ weight`. This tells Python to regress `mpg` (dependent variable) on `weight` (independent variable).
