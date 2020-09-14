---
title: Add and remove list elements
questions:
  - python-coding/add-item-to-list-01
  - python-coding/add-item-to-list-02
  - python-coding/remove-item-from-list-01
---

So far, we have talked about how we create a list and retrieve one or more items. We finally talk about adding and removing items in the list. I won't include exercises here as we may be short on time.

To add an item to a list, use the `append()` function. `append()` adds an element to the **end** of the list.

```python
my_list = [1, 2, 3]
my_list.append(100)

print(my_list)
# [1, 2, 3, 100]
```

To insert an item at a specific location (index), use the `insert()` function.

```python
my_list = [10, 20, 30, 40]
my_list.insert(2, 'chicken')

print(my_list)
# [10, 20, 'chicken', 30, 40]
```

To remove an element from a list, use the `remove()` method. `remove()` will find the first instance of the provided value and removes it.

```python
my_list = ['Shirley', 'Jieun', 'Joohye']
my_list.remove('Jieun')

print(my_list)
['Shirley', 'Joohye']
```
