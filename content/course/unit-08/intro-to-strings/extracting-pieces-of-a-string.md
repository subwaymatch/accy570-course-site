---
title: Extracting pieces of a string 🧶
questions:
  - python-coding/retrieve-characters-from-a-string-01
  - python-coding/retrieve-characters-from-a-string-02
---

Once again, the key idea is to think of a string as a `list` of characters 💡!

To retrieve a single character from a string, use a numerical index (zero-based).

```python
# With a string
msg = 'Hello'
print(msg[0])
# Prints H

# With a list
nums = [1, 2, 3, 4, 5]
print(nums[0])
# Prints 1
```

What about negative indices? Python is smart enough to handle that.👌🏽

```python
# With a string
msg = 'Hello'
print(msg[-1])
# Prints o

# With a list
nums = [1, 2, 3, 4, 5]
print(nums[-1])
# Prints 5
```

To retrieve multiple characters from a string, uses the slicing syntax `my_list[start:end]`. 🐼

```python
my_str = 'The panda is eating a bamboo!'

print(my_str[0:5])
# Prints "The p"

print(my_str[-6:-1])
# Prints "amboo"

my_list = [7, 3.14, False, -3, -10]

print(my_list[0:2])
# Prints [7, 3.14]

print(my_list[-2:])
# Prints [-3, -10]
```
