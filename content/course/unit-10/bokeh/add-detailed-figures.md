---
title: Add detailed figures
---

### Methods for adding detail to a figure

We know how to create an empty figure, but now we need to tell Python what to add into our visualization. There are many different methods or functions within Bokeh to add different shapes (e.g., `circle()`, `diamond()`, `square()`, lines (`line()`), etc. to a figure.

Here are some examples of the syntax for adding detail to a figure.

```python
myfig.circle(x, y)
myfig.diamond(x, y, size, angle)
myfig.square(x, y, size, angle)
myfig.line(x, y)
```
