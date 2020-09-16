---
title: Creating a dictionary
questions:
  - python-coding/create-dictionary-01
  - python-coding/create-dictionary-02
---

- Use curly braces `{}` to enclose data.
- Each key-value pair is separated by a comma.
- The format of a key-value pair is `'key'`: `value`.
- A dictionary can be empty. (`empty_dict = {}`).

| Item         | Amount |
| ------------ | ------ |
| Revenue      | 100    |
| COGS         | 52     |
| Gross Margin | 48     |
| SG&A         | 40     |
| Net Income   | 8      |

The table above can be represented as:

```python
income_statement = {
  'Revenue': 100,
  'COGS': 52,
  'Gross Margin': 48,
  'SG&A': 40,
  'Net Income': 8
}
```
