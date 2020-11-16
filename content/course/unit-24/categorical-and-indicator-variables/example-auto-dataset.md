---
title: 'Example: Auto Dataset 🚓'
---

- In the auto dataset, the column origin contains the values "American", "European", and "Japanese".
- How can we use that in our hypothesis?

| Mpg  | Weight | European | Japanese |
| ---- | ------ | -------- | -------- |
| 25   | 2375   | 1        | 0        |
| 26   | 1835   | 1        | 0        |
| 10   | 4615   | 0        | 0        |
| 37   | 1975   | 0        | 1        |
| 20.5 | 3425   | 0        | 0        |

- The way `statsmodels` package will handle this:
  - There are 3 levels of the _origin_ variable: "American", "European", and "Japanese".
  - It will treat one of them as the base level.
  - It will create indicator variables for the other two and add them to the regression.
    - American cars: 0 for both dummy variables.
    - European: 1 for Euro dummy variable
    - Japanese: 1 for Japan dummy variable

The regression model will be:

$$\text{MPG} = \alpha + \beta_1 \times \text{weight} + \beta_2 \times \text{European} + \beta_3 \times \text{Japanese}$$

- For American cars, both dummy variables will be zero. So the intercept will be \\(\alpha\\).
- For European cars, the European dummy will be 1 and the Japanese dummy will be 0. So the intercept will be \\(\alpha + \beta_2\\). Thus, \\(\beta_2\\) is the difference in fuel economy between European and American cars, all else equal.
- For Japanese cars, the European dummy will be 0 and the Japanese dummy will be 1. So the intercept will be \\(\alpha + \beta_3\\). Thus, \\(\beta_3\\) is the difference in fuel economy between Japanese and American cars, all else equal.
