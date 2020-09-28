---
title: Why use functions? 👜
---

TL;DR (too long, didn't read) - A function makes a block of code **_reusable_** ♻️!

Assume you are working at Chanel as a US sales manager. Your job is to price each luxury handbag 👜 in the US based on the original prices in France. You come up with a formula `price_in_usd = price_in_euro * 1.3 + 100` (i.e., a bag that sells at €3,000 in France will be priced at \$4,000 (€3,000 \* 1.3 + 100).

- Classic Handbag sells at €3,500. You write `classic_handbag = 3500 * 1.3 + 100`.
- Boy Bag sells at €3,200. You write `boy_bag = 3200 * 1.3 + 100`.
- Gabrielle Bag sells at €3,000. You write `gabrielle_bag = 3000 * 1.3 + 100`.
- Kelly Bag sells at €4,000. You write `kelly_bag = 4000 * 1.3 + 100`.
- You repeat this process with 50 different bags...

```python
classic_handbag = 3500 * 1.3 + 100
boy_bag = 3200 * 1.3 + 100
gabrielle_bag = 3000 * 1.3 + 100
kelly_bag = 4000 * 1.3 + 100
# and so on with 50 other bags...
```

After copy-pasting the formula more than 50 times, you're finally done. Just when you're about to take off for the day, your boss walks in and asks you to use a different formula - `price_in_usd = price_in_euro * 1.2 + 400` 😡😱. You go back to your code and update every single line.

```python
classic_handbag = 3500 * 1.2 + 400
boy_bag = 3200 * 1.2 + 400
gabrielle_bag = 3000 * 1.2 + 400
kelly_bag = 4000 * 1.2 + 400
# and so on with 50 other bags...
```

While manually changing every line, you wonder if there is a better way to deal with this repetitive task. This is where Python functions shine upon you✨! You can write a function that handles the conversion.

```python
def convert_bag_price(price_in_euro):
  return price_in_euro * 1.2 + 400
```

With the function, your previous code becomes:

```python
classic_handbag = convert_bag_price(3500)
boy_bag = convert_bag_price(3200)
gabrielle_bag = convert_bag_price(3000)
kelly_bag = convert_bag_price(4000)
```

Now, you handle the task of converting a bag's Euro price to Dollar price in a single code block (inside `convert_bag_price()`. What happens if your boss comes up with _yet another_ new formula? No problem. **You only need to update your `convert_bag_price()` function** (as opposed to updating every line)! 🎉
