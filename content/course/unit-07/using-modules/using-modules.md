---
title: Importing & using modules
---

To use a module (i.e., a library or a package), you must tell Python that you want to use the functions in a module. You can do this by using the `import` statement.

```python
import math
import pandas
```

Once you've imported the module, you can use a function inside the module by using `module_name.function_name` format.

```python
import math

x = 5
fact_x = math.factorial(x)
print(fact_x)
# Prints 120
```

But typing `math` before every function call can be a pain. Some libraries have even longer names (e.g., `statistics`).

There are two ways to shorten your function call.

**Shortcut 1**: Import the function name directly into your environment

```python
from math import factorial, log

print(factorial(5))
# Prints 120
```

**Shortcut 2**: Define an alias

```python
import statistics as st

mydata = [1, 3, 5, 7, 9]
my_median = st.median(mydata)
print(my_median)
# Prints 5
```
