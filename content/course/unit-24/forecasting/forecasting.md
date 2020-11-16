---
title: Forecasting 🔭
---

- Once you have fitted your regression line to your data, you can use it to _predict_ (or _forecast_).
- For example, someone is designing a new car. They have an estimate of its weight and its horsepower. They can use the regression model to predict its fuel economy.
- Marketing firms do this all the time.

Assume:

- A car weighs 3,600 pounds.
- It has 170 horsepower.
- It's a European car.

We can use these information to estimate the `MPG` (dependent variable).

```python
model_combined = smf.ols('mpg ~ weight + horsepower + C(origin)', data=df_auto).fit()
print(model_combined.summary())

model_combined.predict({
    'weight': [3600],
    'horsepower': [170],
    'origin': ['European']
})
```
