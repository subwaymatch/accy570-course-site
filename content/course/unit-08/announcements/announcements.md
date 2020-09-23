---
title: Announcements 📣
---

- 📈 Request Tableau for Students license at [https://www.tableau.com/academic/students](https://www.tableau.com/academic/students)
- 🐢 Problem Set 1 Due Date Extended to Thursday 10/01 11:59 PM CST
- 🤖 Be sure to use the EXACT SAME variable names as asked in the question (lowercase/uppercase included).
- 👮🏾 Make sure to run all code cells before submitting any Jupyter notebook file! **Not running a Jupyter notebook before submitting should be considered a crime against your grade.**

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/jupyterlab-run-all-cells.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/jupyterlab-run-all-cells.png)

A common mistake in after-class exercise 7 was to either print the string or return the result of the print() instead of returning the string itself.

```python
# Incorrect responses
def GreatCPA_1():
  print("Today is a great day to be a CPA!")

print(GreatCPA_1())
# Prints None



def GreatCPA_2():
  return print("Today is a great day to be a CPA!")

print(GreatCPA_2())
# Prints None
```

```python
# Correct solution
def GreatCPA():
  return "Today is a great day to be a CPA!"
```

- Any questions 🙋?
