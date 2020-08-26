---
title: 'If, Else statements'
questions:
  - python-coding/if-hot-or-cold-02
---

```
# 91 degrees farenheit is about 33 degrees celcius
current_temp_in_farenheit = 91

if current_temp_in_farenheit > 80:
  print('Hot')
if current_temp_in_farenheit <= 80:
  print('Not Hot')
```

The previous example worked, right? It does, but it's inelegant and inefficient. The condition is unnecessarily tested twice. If the condition is not true, it must be false. Therefore, we shouldn't have to explicitly test whether it's false.

A better way to write this is with an `else` clause.

```
if condition is true:
  take action X
else:
  take action Y
```
