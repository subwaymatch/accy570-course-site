---
title: What happens if you use an index that is out of range? 🙀
questions:
  - multiple-choice/retrieve-items-from-list-07
  - multiple-choice/retrieve-items-from-list-08
---

What happens if you try to retrieve an item that is out of range? Python will throw an `IndexError` 🚫. You will often encounter this error when you forget that the index begins at 0 instead of 1.

```python
tickers = ['AAPL', 'MSFT']

print(tickers[2])
# IndexError: list index out of range

print(tickers[-3])
# IndexError: list index out of range
```
