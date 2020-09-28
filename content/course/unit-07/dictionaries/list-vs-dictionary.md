---
title: List vs Dictionary
---

Why is a dictionary better than a list in the case below? Each item in a dictionary has a meaningful key ('Revenue', 'COGS', 'Gross Margin', etc).

```python
income_statement_list = [100, 52, 48, 40, 8]

income_statement_dict = {
  'Revenue': 100,
  'COGS': 52,
  'Gross Margin': 48,
  'SG&A': 40,
  'Net Income': 8
}
```
