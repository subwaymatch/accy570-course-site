---
title: Creating a list
questions:
  - python-coding/create-empty-list-01
  - python-coding/create-list-01
---

To create a list, place the variable name on the left, followed by an assignment operator `=` and the list values on the right. Spaces are optional, but are often added for readability

```python
# nums1, nums2, nums3 are all valid,
# although num1 is most readable
nums1 = [1, 2, 3]
nums2 = [1,2,3]
nums3 = [ 1,            2,        3]

print(nums1)
# Output: [1, 2, 3]

# A list can be empty
empty_list = []
```

A list is a data type in Python.

```python
# Output: <class 'list'>
print(type([]))

# Output: <class 'list'>
print(type([1, 2, 3]))

# Output: <class 'list'>
mylist = ['my', 'list']
print(type(mylist))
```
