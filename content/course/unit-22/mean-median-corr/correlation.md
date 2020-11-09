---
title: Correlation 🧲
---

Correlation is a measure of how variables "move" together.

Given variables x and y:

- **Positive** correlation: when x increases, y tends to increase. And vice versa.
- **Negative** correlation: when x increases, y tends to decrease. And vice versa.
- **Near-zero** correlation: x is not useful for predicting y. And vice versa.

The table below shows the correlation matrix for our Compustat data.

|          | Revenue | Income | Accruals | CFO   |
| -------- | ------- | ------ | -------- | ----- |
| Revenue  | 1.00    | 0.68   | -0.66    | 0.79  |
| Income   |         | 1.00   | -0.43    | 0.88  |
| Accruals |         |        | 1.00     | -0.81 |
| CFO      |         |        |          | 1.00  |

For all 2018 U.S. companies, we computed the correlations between:

- Revenue
- Income before extraordinary items
- Accruals
- Operating cash flows (CFO)
