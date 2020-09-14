---
title: Retrieving multiple list elements
questions:
  - python-coding/slice-list-01
  - python-coding/slice-list-02
---

Sometimes, you want to retrieve more than one element from a list. Python implements this through a super-cool feature called _slicing_. The syntax to use slicing is similar to retrieving a single value - `list_name[start:end]`.

- `start` is the index of the first element you want.
- The last element you get is the index `end` - 1.
- In other words, Python will retrieve all items from `start` to `end` - 1. Doesn't make sense? Take a look at the example below.

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(my_list[0:2])
# [0, 1]

print(my_list[1:2])
# [1]

first_four = my_list[0:4]
print(first_four)
# [0, 1, 2, 3]
```
