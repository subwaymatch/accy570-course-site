---
title: Floats
questions:
  - python-coding/create-float-variable
  - python-coding/create-float-variable-and-print-type
---

What happens if you want to store a number that has a fractional amount? We can use real numbers. In Python, real numbers are called `float`s. Why are they called `float`s? It's a shorthand of "floating point number". But we don't need to worry about that at the moment.

In Python, you differentiate integers and floats by looking at the decimals. If a numeric value has trailing decimals, it is a `float` type. To make it simpler, a value is of `float` type if it has a dot.

```python
refund_amount = 30.5
big_mac_price = 3.99

# A numeric value with a trailing decimal of 0 is also a float
my_float = 5.0
my_float2 = -5.0

# How about these?
# It has a dot! Any numeric value with a dot == float
my_float3 = 5.
my_float4 = -5.

# No dot - NOT a float
my_int = 5
```
