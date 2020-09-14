---
title: Creating a list of mixed types
questions:
  - python-coding/create-list-02
  - python-coding/create-nested-list-01
---

A list can contain mixed types of data.

```python
# This is perfectly valid!
mixed_list = [2020, 'dontrell', -3.14, True]
```

In fact, a list can have other lists (nested list). Assume that you are given a table of the closing/opening prices of Apple stock for 3 days (shown in the table below). You can use a nested list to represent this table.

| Date       | Open | Close |
| ---------- | ---- | ----- |
| 09/09/2020 | 117  | 117   |
| 09/10/2020 | 120  | 113   |
| 09/11/2020 | 115  | 112   |

```python
# Each element in the list represents [Open Price, Close Price]
open_close = [[117, 117], [120, 113], [115, 112]]
```
