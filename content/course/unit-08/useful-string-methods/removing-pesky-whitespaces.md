---
title: Removing pesky whitespaces 🪒
questions:
  - multiple-choice/string-strip-01
  - multiple-choice/string-strip-02
  - python-coding/string-strip-03
---

We often need to get rid of pesky spaces. In Python, a "whitespace" is defined as a space, a tab, or a newline character.

To remove all whitespaces from the beginning _and_ end of a string, use the `strip()` method.

```python
s = '  Income Statement  '
print(s.strip())
# Prints 'Income Statement'
```

To remove all whitespaces from just the beginning _or_ just the end of a string, use the `lstrip()` (left strip) or `rstrip()` (right strip) methods.

```python
s = '  Income Statement  '

print(s.lstrip())
# Prints 'Income Statement  '

print(s.rstrip())
# Prints '  Income Statement'
```

Note that `strip()`, `lstrip()`, and `rstrip()` methods all return new strings without modifying the original string.

```python
name = '  Mitch  '

print(name.strip())
# Prints 'Mitch'

print(name)
# Prints '  Mitch  '
# Although you've called the strip() method on name, the variable remains unchanged
```
