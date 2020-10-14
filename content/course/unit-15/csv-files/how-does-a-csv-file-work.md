---
title: How does a CSV file work? 🐇
---

Assume that you have an Excel spreadsheet of UPS stock price data.

| Date       | Stock Price |
| ---------- | ----------: |
| 10/9/2020  |      113.86 |
| 10/10/2020 |      115.28 |
| 10/11/2020 |      116.02 |
| 10/14/2020 |      115.87 |
| 10/15/2020 |      116.48 |

If you saved it into CSV:

```
Date,Stock Price
10/9/2020,113.86
10/10/2020,115.28
10/11/2020,116.02
10/14/2020,115.87
10/15/2020,116.48
```

- One line in the file per row of data.
- Although The first row contains column names in the example above, it is not necessary.
- Each value is written as text.
- There's a comma between each value in a row.
  - CSV stands for "comma separated value".
- Commas are used as boundaries between columns.
