---
title: String overview 🧵
questions:
  - python-coding/create-a-string-01
  - python-coding/convert-a-string-to-a-list-01
---

When working with accounting analytics, you will encounter a lot of textual data 📜. Therefore, it's good to know how to work with strings.

💡 **Key idea**: Think of a string as a `list` of characters!

```python
courses = [512, 515, 570]

greet = 'Hello'
greet_chars = ['H', 'e', 'l', 'l', 'o']
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/string-as-list-of-chars.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/string-as-list-of-chars.png)

If you want, you can do this using the built-in function `list()`. The `list(x)` function attempts to convert a given value `x` into a `list` type.

```python
converted = list('Hello')

print(converted)
# Prints ['H', 'e', 'l', 'l', 'o']

print(list('A cow'))
# Prints ['A', ' ', 'c', 'o', 'w']
# Note that a space is also a character in the list
```

Note that a blank space is also a character in the converted list. `'A cow'` is converted into a list of 5 characters - `['A', ' ', 'c', 'o', 'w']`. 🐮
