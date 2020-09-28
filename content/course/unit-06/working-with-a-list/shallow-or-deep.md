---
title: Shallow and deep copies of a list
questions:
  - multiple-choice/list-copy-01
  - multiple-choice/list-copy-02
  - multiple-choice/list-copy-03
---

- You are given a list named `original` with values `[1, 2, 3]`.
- You want to create a cloned list `copy` and update the first item to `100`.
- After the task, `original` should have values `[1, 2, 3]`
- and `copy` should have values `[100, 2, 3]`

You may think that using an assignment operator `=` may do the job.

```python
original = [1, 2, 3]
copy = original

# Only update copy
copy[0] = 100

print(copy)
# [100, 2, 3]

# Wait, what!?
print(original)
# [100, 2, 3]
```

Updating `copy` has also updated `original`. In fact, `copy` and `original` are both pointing to the same list. This behavior is by design and is called a _shallow_ copy. This behavior is described below.

![Shallow Copy Diagram](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/shallow-copy-diagram-01.png)

To create a _deep copy_, use the `copy()` function.

```python
original = [1, 2, 3]
# Note the copy() here
copy = original.copy()

# Only update copy
copy[0] = 100

print(copy)
# [100, 2, 3]

print(original)
# [1, 2, 3]
```

![Deep Copy Diagram](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/deep-copy-diagram-01.png)
