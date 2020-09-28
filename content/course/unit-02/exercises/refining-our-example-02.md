---
title: Refining our Example Further
questions:
  - python-coding/deloitte-vs-pwc-03
---

Our previous code used nested `if` statements.

```python
pwc_offer = 102000
deloitte_offer = 100000

if (pwc_offer > deloitte_offer):
    print('Accept PwC offer')
else:
    if (deloitte_offer - pwc_offer >= 5000):
        print('Accept Deloitte offer')
    else:
        print('Accept PwC offer')
```

Can we simplify those statements?
