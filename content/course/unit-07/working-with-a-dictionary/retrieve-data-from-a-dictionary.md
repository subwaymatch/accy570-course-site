---
title: Retrieve data from a dictionary
questions:
  - python-coding/retrieve-item-from-dictionary-01
---

The syntax is similar to lists, but you use the key instead of a positional index.

```python
info = {
  'name': 'Peter',
  'degree': 'MAS',
  570: True
}

print(info['name'])   # 'Peter'
print(info['degree']) # 'MAS'
print(info[570])      # True
```

Using our income statement example:

```python
income_stmt_list = [100, 52, 48, 40, 8]
# To retrieve revenue,
# income_stmt_list[0]

income_stmt_dict = {
  'Revenue': 100,
  'COGS': 52,
  'Gross Margin': 48,
  'SG&A': 40,
  'Net Income': 8
}
# To retrieve revenue,
# income_stmt_dict['Revenue']
```
