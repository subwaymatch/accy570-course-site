---
title: Slicing in steps
questions:
  - python-coding/slice-list-05
---

When you add a step parameter, the slicing logic becomes:

```python
# Create a new, empty list named sliced_list
sliced_list = []
i = start

while (i < end):
  # Don't worry about this code for now
  # append() adds an item to a list
  sliced_list.append(my_list[i])

  # Preivously, i = i + 1
  i = i + step

return sliced_list
```
