---
title: What is a dictionary?
---

A dictionary 📗 is a collection of "key-value pairs". In a dictionary of words keys refer to the words and values refer to the meanings.

Assume you are given the following income statement table (partial). How do we represent this data in Python?

| Item         | Amount |
| ------------ | ------ |
| Revenue      | 100    |
| COGS         | 52     |
| Gross Margin | 48     |
| SG&A         | 40     |
| Net Income   | 8      |

We already know how to use a list 😼:

```python
income_statement = [100, 52, 48, 40, 8]
```

But this is a poor choice. Why is this not a good choice for storing this information?

- Need to know the index of every item in the list
- Accidentally adding or removing an item can screw up the orderings and meanings of the values
- Difficult to enforce constraints (e.g. gross margin = revenue - COGS)
