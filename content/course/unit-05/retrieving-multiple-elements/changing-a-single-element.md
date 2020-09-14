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

![Update a list by indices](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/list_update_by_indices.png)
