---
title: Retrieving an item from a list with a negative index
questions:
  - multiple-choice/retrieve-items-from-list-04
  - python-coding/retrieve-items-from-list-05
  - python-coding/retrieve-items-from-list-06
---

Using the index to retrieve an item worked fine... until you face a much longer list. As an example, you'd like to get the latest stock closing price given a list of daily closing prices. Assume the prices are ordered chronologically.

```python
stock_prices = [120, 119, 101, 109, 115, 109,
110, 107,117, 112, 115, 112, 116, 115, 107,
109, 114, 101, 106, 108, 112, 106, 115, 116,
100, 115, 112, 101, 118, 116, 115, 106, 101]

# After a few minutes of counting
# the number of items in the list...
print(stock_prices[32])
# Prints 101
```

To retrieve the last item in the list above, you start counting the number of items in the `stock_prices` list. There are 33 items. `stock_prices[32]` would return the latest closing price since the index starts at 0. This seems inefficient. Is there an alternative? Yes (as always)! It's possible to use a negative index to retrieve an item from the end of a list.

```python
stock_prices = [120, 119, 101, 109, 115, 109,
110, 107,117, 112, 115, 112, 116, 115, 107,
109, 114, 101, 106, 108, 112, 106, 115, 116,
100, 115, 112, 101, 118, 116, 115, 106, 101]

# After a few minutes of counting
# the number of items in the list...
print(stock_prices[32])
# Prints 101

print(stock_prices[-1])
# Also prints 101
```

Let's go back to the cash balances example.

```python
# Apple's fiscal year-end cash balances from 2015 to 2019
cash = [21120, 20484, 20289, 25913, 48844]

print(cash[-1])
# Prints 48844

print(cash[-2])
# Prints 25913

print(cash[-3])
# Prints 20289
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f267bc0-07e4-43a2-a8cc-84e461b69001/negative_indices.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f267bc0-07e4-43a2-a8cc-84e461b69001/negative_indices.png)
