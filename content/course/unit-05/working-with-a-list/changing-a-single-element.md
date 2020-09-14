---
title: Changing a single list element
questions:
  - python-coding/update-list-item-01
  - multiple-choice/update-list-item-02
---

You can treat a single list element as a variable and assign to it.

```python
l = [10, 20, 30, 40]
l[2] = 'cat'
l[-1] = l[0] - 4

print(l)
# Prints [10, 20, 'cat', 6]
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c04e5f0e-1675-465d-9ebf-b80e7ebf437f/list_update_by_indices.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c04e5f0e-1675-465d-9ebf-b80e7ebf437f/list_update_by_indices.png)
