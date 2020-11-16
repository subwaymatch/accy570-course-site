---
title: p-values ⚓️
---

If there's no relationship between the independent and dependent variables, what's the probability that we would observe this data?

Recall the original regression equation:

$$\text{MPG} = \alpha + \beta \times \text{Weight}$$

If there's no relationship, the coefficient β would be zero.

$$\text{MPG} = \alpha + 0 \times \text{Weight}$$

p-value gives you the probability that the true coefficient is zero. Many researchers use a 10% cutoff. If the p-value is less than 0.10, the variable is considered "significant".
