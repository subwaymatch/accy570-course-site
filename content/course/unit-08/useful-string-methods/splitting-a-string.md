---
title: Splitting a string ✂️
questions:
  - multiple-choice/string-split-01
  - python-coding/string-split-02
---

Another super-useful string method is `split()`. It splits a string into a `list` of substrings.

```python
s = 'GM headquarters is in Detroit.'

words = s.split()
print(words)
# Prints ['GM', 'headquarters', 'is', 'in', 'Detroit.']
```

Notice that `split()` eliminates the whitespace between words. By default, `split()` uses whitespace as word boundaries. However, you can split on whatever characters you want!

```python
s = 'GM;;headquarters;;is;;in;;Detroit.'

words = s.split(';;')
print(words)
# Prints ['GM', 'headquarters', 'is', 'in', 'Detroit.']
```
