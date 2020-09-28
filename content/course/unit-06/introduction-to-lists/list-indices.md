---
title: List indices
questions:
  - multiple-choice/retrieve-items-from-list-01
  - python-coding/retrieve-items-from-list-02
  - python-coding/retrieve-items-from-list-03
---

Just when you think you know how to use a list in Python, your boss stops by and asks you to find the cash balance for 2015 using Python 🙁. Recall that we've created the `cash` list in one of the previous pages. Since the list contains data from 2015 to 2019, we know that the cash balance for 2015 is the first item in `cash` (21120).

```python
# Apple's fiscal year-end cash balances from 2015 to 2019
cash = [21120, 20484, 20289, 25913, 48844]

# 21120 is the figure we're looking for.
```

Is there a way to retrieve an item from the list? Of course 👌! Each element in a Python list has an _index_. You can think of the indices as incrementing numbers that indicate the order of elements. The `cash` balances list with indices is depicted below. **Note that the indices start from 0, not 1.**

![Indices](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/list_indices.png)

To retrieve an item in a list by index, use square brackets `[]` with the index number inside. As an example, `cash[0]` retrieves the first item of `cash`.

```python
cash = [21120, 20484, 20289, 25913, 48844]

print(cash[0])
# Prints 21120

print(cash[1])
# Prints 20484

balance = cash[2]
print(cash[2])
# Prints 20289
```
