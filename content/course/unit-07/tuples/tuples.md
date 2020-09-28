---
title: Tuples
---

A tuple is nearly identical to a list. The differences are:

- A tuple cannot be changed after it is created (it is _immutable_ 👈🏼).
- Tuples use parentheses `()`, whereas lists use square brackets `[]`.

```python
trio_list = ['Joohye', 'Jieun', 'Shirley']
trio_tuple = ('Joohye', 'Jieun', 'Shirley')

print(trio_list)
# ['Joohye', 'Jieun', 'Shirley']

print(trio_tuple)
# ('Joohye', 'Dark Knight', 'Shirley')

# Update list - Works
trio_list[1] = 'Dark Knight'
print(trio_list)
# ['Joohye', 'Dark Knight', 'Shirley']

# Update tuple - THROWS AN ERROR!
trio_tuple[1] = 'Dark Knight'
print(trio_tuple)
# TypeError: 'tuple' object does not support item assignment
```

Other than these differences, tuples and lists are nearly identical.

You do not have to learn the details of tuples. We only mention tuples because many Python functions require tuples as inputs.

```python
figure_size = (500, 300)

draw_chart(figure_size)
```
