---
title: Multiple independent variables ⚗️
---

Often, you will hypothesize that multiple independent variables affect your dependent variable. For example, a car's fuel economy might be affected by its weight _and_ its horsepower.

$$\text{MPG} = \alpha + \beta_1 \times \text{Weight} + \beta_2 \times \text{Horsepower}$$

Notice that I hypothesized an additive relationship. In this hypothesis, weight and horsepower are _assumed_ to have independent effects on fuel economy.

Python code:

```python
import statsmodels.api as sm
import statsmodels.formula.api as smf

results = smf.ols('mpg ~ weight + horsepower', data=df).fit()
print(results.summary())
```
