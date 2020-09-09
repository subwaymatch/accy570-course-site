---
title: Membership Operators
---

Membership operators are used to whether a collection (such as a list) contains a value. As an example, you want to check whether garlic is included in a recipe for a pasta.

```python
ingredients = ['tomato', 'mushroom', 'garlic', 'salt', 'pepper']

if 'garlic' in ingredients:
	print('Yes, garlic is used!')
```

Note that you can also combine it with the `not` operator we've just learned.

```python
fridge_items = ['milk', 'cheesecake']

if 'eggs' not in fridge_items:
	print('Need to purchase eggs!')
```
