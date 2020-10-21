---
title: Accounting number strings  💵
---

Consider a CSV file below:

```
Company Name,Ticker,Closing Price
Microsoft,MSFT, $138.43
Apple,AAPL, $240.51
Google,GOOG," $1,246.15 "
Oracle,ORCL, $55.13
SAP,SAP, $132.71
```

Look at the third column.

- The numbers in third columns will be imported as strings.
- Also notice the quotes around Google's stock price.
- We need to convert these strings into `float`s so we can work with them.
- To do that, we need to remove dollar signs, commas, etc. Otherwise, Python can't convert it.
- **But hold on** - don't you already know how to remove dollar signs and commas!? 🎃
