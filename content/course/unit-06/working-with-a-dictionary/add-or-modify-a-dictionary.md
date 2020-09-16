---
title: Add or modify a dictionary key-value pair
questions:
  - python-coding/add-dictionary-key-value-pair-01
  - python-coding/update-dictionary-key-value-pair-01
---

To add a Key-Value pair to a dictionary, simply assign the value to a new key.

```python
income_stmt = {
  'Revenue': 100,
  'COGS': 52,
  'Gross Margin': 48,
  'SG&A': 40,
  'Net Income': 8
}

# Create a new Key-Value pair
income_stmt['Other Comprehensive Income'] = -12
```

To modify a value in the dictionary, set the new value using the key.

```python
income_stmt = {
  'Revenue': 100,
  'COGS': 52,
  'Gross Margin': 48,
  'SG&A': 40,
  'Net Income': 8,
  'Other Comprehensive Income': -12
}

income_stmt['SG&A'] = 39
income_stmt['Net Income'] = 7
```
