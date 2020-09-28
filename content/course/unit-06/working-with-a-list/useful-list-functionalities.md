---
title: Useful List Functionalities
questions:
  - multiple-choice/length-of-a-list-01
  - multiple-choice/using-in-operator-01
  - multiple-choice/length-of-a-list-02
  - multiple-choice/multiply-list-01
---

To find the number of items of a list, use the `len()` function.

```python
row = ['Kevin', 'Mijeong', 'Nick', 'Joshua', 'Mitch']

print(len(row))
# 5

print(len([]))
# 0
```

You can check whether an element belongs to a list by using the `in` operator.

```python
row = ['Kevin', 'Mijeong', 'Nick', 'Joshua', 'Mitch']

print('Kevin' in row)
# True

print('Sangmin' in row)
# False
```

You can join (concatenate) lists using the `+` operator.

```python
print([1, 2, 3, 4] + [5] + [6, 7])
# [1, 2, 3, 4, 5, 6, 7]
```

To duplicate a list, you can use the `*` operator.

```python
my_list = [1, 2]
print(my_list * 3)
# [1, 2, 1, 2, 1, 2]
```

To reverse a list, use the `reverse()` function.

```python
my_list = [1, 2, 3, 4]
my_list.reverse()

print(my_list)
# [4, 3, 2, 1]
```
