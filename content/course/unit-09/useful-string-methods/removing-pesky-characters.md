---
title: Removing pesky characters 🪓
questions:
  - multiple-choice/string-strip-04
  - multiple-choice/string-strip-05
---

By default, the three methods - `strip()`, `lstrip()`, `rstrip()` - remove whitespace. However, you can use them to remove any characters! To do so, tell Python which characters you want removed by passing a string argument. The string argument should contain the characters to be removed.

For example, say you want to remove all punctuation from the end of a string.

```python
s = ';Balance Sheet,,,;.'

print(s.rstrip(',.;'))
# Prints ';Balance Sheet'

s_rstripped = s.rstrip(',.;')
print(s_rstripped)
# Prints ';Balance Sheet'

# BE AWARE!
print(s)
# Prints ';Balance Sheet,,,;.'
# The original string remains unaltered

# To alter the original string,
s = s.rstrip(',.;')
print(s)
# Prints ';Balance Sheet'
```

The code above tells Python to remove _all_ commas, periods, and semicolons from the end of the string. Note that the `rstrip()` method will _only_ remove the given characters from the end.
