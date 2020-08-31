---
title: Repeating an action
questions:
	- python-coding/for-loop-range-01
---

Let's go back to the donut example. A customer orders half-dozen donuts. You want to print out "Added a donut" every time you add a donut to the bag.

Using a while loop, your code would look like below:

```python
num_donuts = 0

while num_donuts < 6:
  print('Added a donut')
  num_donuts = num_donuts + 1
```

Can we use a for loop instead? Yes! Instead of manually tracking the number of donuts in the bag, we will use the `range` function instead. If you don't know what a function is, don't worry about it. We'll cover it in the upcoming lectures.

```python
for n in range(6):
	print('Added a donut')
```

How does that work? The code above is identical to:

```python
for n in [0, 1, 2, 3, 4, 5]:
	print('Added a donut')
```

`range(n)` generates a list of numbers from 0 to n - 1.
