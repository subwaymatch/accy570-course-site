---
title: First Regression Example 🎳
---

Our first dataset is the "Auto MPG Data Set". 🚘

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/isometric-car-illustration-001_tn.jpg](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/isometric-car-illustration-001_tn.jpg)

- It contains data on cars from the 1970's and 1980's.
- There are 398 rows and 9 columns.
- It's maintained by UC Irvine Machine Learning Repository ([link here](https://archive.ics.uci.edu/ml/datasets/Auto%2BMPG)).

| Column       | Description                        |
| ------------ | ---------------------------------- |
| Mpg          | Miles per gallon                   |
| Cylinders    | Number of cylinders in the engine  |
| Displacement | Engine size in cubic inches        |
| Horsepower   | Engine horsepower                  |
| Weight       | Vehicle weight (pounds)            |
| Acceleration | Time to accelerate from 0 – 60 mph |
| Model Year   | Model year                         |
| Origin       | "American", "European", "Japanese" |
| Car Name     | Car Name                           |

Say you hypothesize that heavier cars have worse fuel economy than lighter cars.

- Dependent variable: fuel economy (`Mpg`)
- Independent variable: vehicle weight (`Weight`)

I can test this hypothesis by running a regression. It will fit this line:

$$\text{MPG} = \alpha + \beta \times \text{Weight}$$

α and β terms are _coefficients_. The regression will use the data to find the coefficients that minimize the error.

When we regress fuel economy on weight, we obtain:

$$\text{MPG} = 46.3174 - 0.0077 \times \text{Weight}$$

- The coefficients are:
  - β: -0.0077
  - α: 46.3174
- For every one-pound increase in weight, fuel economy decreases by 0.0077.
- What does the α term tell us? In theory, a car with zero weight would get 46 miles-per-gallon.
  - Also called the "intercept"
  - Think of it as a "fixed cost".
