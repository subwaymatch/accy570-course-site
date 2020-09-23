---
title: Removing pesky whitespaces 🪒
questions:
  - multiple-choice/string-strip-01
  - multiple-choice/string-strip-02
  - python-coding/string-strip-03
---

### Removing pesky characters 🪓

By default, the three methods - `strip()`, `lstrip()`, `rstrip()` - remove whitespace. However, you can use them to remove any characters! To do so, tell Python which characters you want removed by passing a string argument. The string argument should contain the characters to be removed.

For example, say you want to remove all punctuation from the end of a string.

```python
s = ';Balance Sheet,,,;.'
print(s.rstrip(',.;'))
# Prints ';Balance Sheet'
```

The code above tells Python to remove _all_ commas, periods, and semicolons from the end of the string. Note that the `rstrip()` method will _only_ remove the given characters from the end.
