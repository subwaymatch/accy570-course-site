---
title: R-squared and "Good" models 🧲
---

\\(R^2\\) is the proportion of variation in the dependent variable (DV) explained by the independent variables. Higher \\(R^2\\) means that your model explains more of the variation in the DV.

$$R^2 \in \lbrack0, 1\rbrack$$

Can a "good" model have low \\(R^2\\)? Can a "bad" model have high \\(R^2\\)?

**It depends.**

- What's a good model?
- If your objective is to find variables that affect your DV, then \\(R^2\\) doesn't matter, p-values do.
  - Example: Some asset pricing models have \\(R^2\\) less than 0.01, but they found a significant variable that can explain some movement in asset prices.
- If your objective is to develop a complete explanation of your DV, then you will care about \\(R^2\\).
