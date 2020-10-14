---
title: Passing a file to function as an argument 🦌
questions:
  - multiple-choice/macbook-desktop-path-01
---

Assume that your username is `park`. Again, you can get your username by using the code below.

```python
import os

print('Username:')
print(os.getlogin())
# Returns 'park' for me, but another string for you
```

We will try calling the `exists()` function that returns `True` if a file exists in the given path, and `False` if otherwise.

If you're on a Mac:

```python
import os
os.path.exists('/users/park/Downloads/dog.xlsx')
```

If you're on Windows:

```python
import os

# Method 1
os.path.exists('C:\\users\\park\\downloads\\dog.xlsx')

# Method 2

os.path.exists(r'C:\users\park\downloads\dog.xlsx')

# Method 3
os.path.exists('C:/users/park/downloads/dog.xlsx')
```
