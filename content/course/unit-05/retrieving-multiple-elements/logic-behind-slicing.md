---
title: Logic behind slicing
questions:
  - multiple-choice/slice-list-03
  - multiple-choice/slice-list-04
---

When you slice a list (e.g. `my_list[start:end]`), Python implements the logic below. I will never ask you about the logic below in a quiz. It's only here to help you understand how slicing works behind the scenes.

```python
# Create a new, empty list named sliced_list
sliced_list = []
i = start

while (i < end):
  # Don't worry about this code for now
  # append() adds an item to a list
  sliced_list.append(my_list[i])
  i = i + 1

return sliced_list
```

What happens when your `end` index is smaller or equal to `start` index in `my_list[start:end]`? Python will return an empty list.

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(my_list[1:1])
# []

print(my_list[6:4])
# []
```
