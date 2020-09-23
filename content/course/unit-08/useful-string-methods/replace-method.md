---
title: Replace method 🎯
questions:
  - python-coding/string-replace-01
---

Another useful string method is `replace()`. You can replace all occurrences of a text with new text. The signature for the `replace()` method is `my_str.replace(old, new)`. `old` is the current text which will be replaced by the `new` text.

Look at the `fake_news` string below. Foxes don't like to build dams 🦊. Beavers do. To replace `fox` with `BEAVER`, use the `replace()` method.

```python
fake_news = 'A fox likes to build dams.'

print(fake_news.replace('fox', 'BEAVER'))
# Prints 'A BEAVER likes to build dams.'

correct_news = fake_news.replace('fox', 'BEAVER')
print(correct_news)
# Prints 'A BEAVER likes to build dams.'

# BE AWARE!
print(fake_news)
# Prints 'A fox likes to build dams.'
# The original string remains unaltered

# To alter the original string,
fake_news = fake_news.replace('fox', 'BEAVER')
print(fake_news)
# Prints 'A BEAVER likes to build dams.'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/beaver-fox.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/beaver-fox.png)

Again, the call to the replace method does _not_ alter the original string!

```python
news = 'A fox likes to build dams.'
news.replace('fox', 'BEAVER')

print(news)
# Prints 'A fox likes to build dams.'
```
