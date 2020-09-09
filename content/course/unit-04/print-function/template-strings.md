---
title: Printing with "f-strings"
---

Often, we want to print more complicated expressions. The easiest way to do this is with "f-strings". To create an "f-string", prepend "f" in front of a string. Any expressions inside the curly braces (`{}`) are evaluated before being printed out.

```python
name = "Xuya"

print(f'Hi, my name is {name}.')  # Hi, my name is Xuya.
```

Another example:

```python
FiscalYear = 2020
NetIncome = 700.00
CompanyName = 'XYZ Corp.'

print(f"In {FiscalYear}, {CompanyName}'s net income was ${NetIncome}.")
# In 2020, XYZ Corp.'s net income was $700.0.
```

You can also do calculations inside the curly braces:

```python
FiscalYear = 2020
NetIncome = 700.00
CompanyName = 'XYZ Corp.'

s = f"In {FiscalYear+1}, we expect {CompanyName}'s net income to be ${NetIncome * 2}."
print(s)
# In 2021, we expect XYZ Corp.'s net income to be $1400.0.
```
