---
title: Iterating over a list
questions:
  - python-coding/iterate-over-list-01
  - python-coding/iterate-over-list-02
---

There are two ways to iterate over a list - the usual way (using the `in` operator) and the unusual way (when you need the indices).

Normally, you only need the values without the indices. As an example, you are given a task to print the first 5 perfect squares without modifying the original list. Using the power operator `**`, the code would be:

```python
first_five = [1, 2, 3, 4, 5]

for num in first_five:
  print(num ** 2)

# Prints
# 1
# 4
# 9
# 16
# 25

print(first_five)
# Prints [1, 2, 3, 4, 5]
```

But what if you're given the same task, but you want to **update the original list**? You would need the indices to update the values of the list.

```python
first_five = [1, 2, 3, 4, 5]

# idx is an abbreviation for index
# You're free to use any other name
# 5 inside range() is the number of items in the list
# range(5) == [0, 1, 2, 3, 4]
for idx in range(5):
	# Update an item to its squared value
  first_five[idx] = first_five[idx] ** 2

print(first_five)
# Prints [1, 4, 9, 16, 25]
```
