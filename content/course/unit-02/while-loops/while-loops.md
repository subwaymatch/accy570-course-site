---
title: While Loops
questions:
  - python-coding/simplify-repeated-if-statements
---

You love donuts. In fact, you love donuts so much that you start working at a donut shop. A customer asks you for half-dozen (6) donuts. To keep a track of how many donuts you put in a bag, you create a variable `num_donuts` and keep incrementing it until there are 6 donuts in the bag. Look at the sample below.

```
num_donuts = 0

if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1

# Since there are already six donuts in the bag, num_donuts will not be incremented from here
if num_donuts < 6:
  num_donuts = num_donuts + 1
if num_donuts < 6:
  num_donuts = num_donuts + 1

print(f'There are {num_donuts} donuts in the box')
```

That will print out "There are 6 donuts in the box". But can we simplify that? In programming, you often have to perform repetitive tasks as shown above. This is where loops come in. We can use loops to perform a task multiple (or infinite) times.

A `while` loop is a way to tell Python to run an `if`-statement until the condition is no longer true.

The syntax for a `while` loop is shown below:

```
# While some_condition is satisfied (True)
while some_condition:
  # do something
```

Note that the syntax resembles that of an `if`-statement.
