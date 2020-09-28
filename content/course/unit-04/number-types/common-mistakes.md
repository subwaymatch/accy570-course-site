---
title: Common Mistakes
questions:
  - python-coding/fix-invalid-integer-format
---

As accountants, you may be used to formatting numbers in certain ways. Take a look at the amount below.

Net Profit: `$(2,327,098)`

You will likely process this as a loss of about 2.3 million dollars. As accountants, you may be tempted to use the dollar signs, parentheses, and commas when representing numbers in Python. However, those are incompatible with Python numbers.

Remember to store numbers in the _purest_ form possible (no commas, dollar signs, or parentheses).

```python
# INCORRECT!!
gross_margin = $(2,327,098)

# CORRECT
gross_margin = -2327098
```
