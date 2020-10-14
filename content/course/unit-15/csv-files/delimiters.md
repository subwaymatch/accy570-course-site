---
title: Delimiters in CSV
---

From the previous example:

```markdown
Date,Stock Price
10/9/2020,113.86
10/10/2020,115.28
10/11/2020,116.02
10/14/2020,115.87
10/15/2020,116.48
```

By default, a CSV file uses commas to separate (or "delimit") values in the columns. ✂️ In this case, commas are _delimiters_.

However, it's sometimes problematic to use commas. For example, what happens if your data has commas in it? Imagine a dataset with company names. "Deloitte & Touche, LLP" is a valid name, but it has a comma in it.

In this case, you can use **any** other characters to delimit your data. Common alternatives are tabs and semicolons. Pandas and Excel make it easy to read and save using other delimiters.
