---
title: Operater Precedence
---

Python has "operator precedence". Some operators have higher priority than others. Evaluation occurs in the order of precedence. If two operators have same level of precedence, Python will evaluate expressions left-to-right.

```python
# Don't worry about this for now
print(5 + 3 ** 2)                         # 14

print(not - 5 + 3 ** 4 * 2 // 50 == 1)    # True

# Use parentheses to force an order of evaluation
# Similar to mathematics, innermost parentheses are evaluated first
# This is a good habit!
print((5 + 3) ** 2)                       # 64

# Same as before, but with parentheses for clarity
not (-5 + (((3 ** 4) * 2) // 50) == 1)    # True
```

In general, operator precedence follow the same rules as in mathematics.

Operator Precedence Table - [https://www.mathcs.emory.edu/~valerie/courses/fall10/155/resources/op_precedence.html](https://www.mathcs.emory.edu/~valerie/courses/fall10/155/resources/op_precedence.html)
