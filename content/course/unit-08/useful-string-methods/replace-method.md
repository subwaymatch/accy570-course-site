---
title: Replace method 🎯
questions:
  - python-coding/string-replace-01
---

Another useful string method is `replace()`. You can replace all occurrences of a text with new text. The signature for the `replace()` method is `my_str.replace(old, new)`. `old` is the current text which will be replaced by the `new` text.

Look at the `fake_news` string below. Foxes don't like to build dams 🦊. Beavers do. To replace `fox` with `beaver`, use the `replace()` method.

```python
fake_news = 'A fox likes to build dams.'

print(fake_news.replace('fox', 'beaver'))
# Prints 'A beaver likes to build dams.'
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/beaver-fox.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/beaver-fox.png)

The call to the replace method does _not_ alter the original string!

```python
news = 'A fox likes to build dams.'
news.replace('fox', 'beaver')

print(news)
# Prints 'A fox likes to build dams.'
```

If you want to alter the original string, write code like the following:

```python
news = 'A fox likes to build dams.'
news = news.replace('fox', 'beaver')

print(news)
# Prints 'A beaver likes to build dams.'
```
