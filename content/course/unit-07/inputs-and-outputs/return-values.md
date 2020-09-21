---
title: Calling functions and getting return values
questions:
  - multiple-choice/function-return-value-01
---

```python
def double_it(x):
  result = x * 2

  print(result)
```

What does Python print when you run the code above? **Nothing 👺!** When you define a function, Python doesn't run it until you explicitly _call_ it. To call the `double_it` function, use parentheses and pass in arguments (if there are any) as shown below:

```python
double_it(5)
# Prints 10
```

What happens if you want to retrieve the result of `double_it()` and save it into a new variable? We could give this a try:

```python
func_result = double_it(5)
# Prints 10

print(f'func_result: {func_result}')
# Prints func_result: None
```

But `func_result` turns out to be `None` instead of `10` 🙄. If we look closely at our original `double_it()` function, it doesn't have a `return` statement (which is used to hand over a value). Let's change our function to return a value.

```python
def double_it(x):
  result = x * 2

  # Previously
  # print(result)

  # Instead, return result
  return result
```

```python
func_result = double_it(5)
# Nothing printed

print(f'func_result: {func_result}')
# Prints func_result: 10
```

Once we use the `return` statement, `double_it()` returns the value 🤹.
