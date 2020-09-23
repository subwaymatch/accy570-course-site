---
title: Getting the length of a string 🧐
questions:
  - multiple-choice/length-of-a-string-01
  - multiple-choice/length-of-a-string-02
  - python-coding/length-of-a-string-03
---

Last week, we've discussed the `len()` function. The `len()` function returns the length of a list.

```python
# With a list
l1 = [515, 550, 570]
print(len(l1))
# Prints 3
```

`len()` function also works with a string. Use the `len` function to get the length (number of characters) of a string.

```python
# With a string
s1 = 'NO WAY'
print(len(s1))
# Prints 6
# A blank space is also counted as a character
```

Note that a blank space is also counted as a character. `len('NO WAY')` returns 6 instead of 5 since the space character between 'NO' and 'WAY' is counted.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/string-blank-space-as-character.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/string-blank-space-as-character.png)
