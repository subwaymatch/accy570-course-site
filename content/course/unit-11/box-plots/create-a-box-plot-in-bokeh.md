---
title: Create a box plot in Bokeh 🟩
---

Calculate the min, Q1, Q2 (median), Q3, and max of the data using `min()`, `max()`, and `np.quantile()` functions.

The `quantile()` method from NumPy calculates any percentile for the data (e.g., 8th percentile, 25th percentile, etc.).

```python
import numpy as np

datamax = max(mydata)
datamin = min(mydata)
Q1 = np.quantile(mydata, 0.25)
Q2 = np.quantile(mydata, 0.50)
Q3 = np.quantile(mydata, 0.75)
```

Once all of the variables are calculated, you can create the figure in Python. Let's walk through the class notebook with example code 🚶‍♀️.

```python
from bokeh.plotting import figure, show
from bokeh.io import output_notebook
output_notebook()

p = figure(
    title='Example Quartile Data',
    plot_width=400,
    plot_height=400,
    x_range=(-1,1)
)

# Hide the x-axis since it has no meaning here.
p.xaxis.visible = False

# These lines of code draw the rectangles. vbar means vertical bar.
p.vbar(x=0, width=0.55, top=Q2, bottom=Q3, fill_color="#E08E79", line_color="black")
p.vbar(x=0, width=0.55, top=Q1, bottom=Q2, fill_color="#3B8686", line_color="black")

# These lines of code draw the whiskers. The segment glyph draws a line
# from (x0,y0) to (x1,y1).
p.segment(x0=0, y0=datamax, x1=0, y1=Q3, line_color="black", line_width=2)
p.segment(x0=0, y0=datamin, x1=0, y1=Q1, line_color="black", line_width=2)

# These lines of code draw the ending lines on the whiskers. The segment
# glyph draws a line from (x0,y0) to (x1,y1).
p.segment(x0=-0.075, y0=datamin, x1=0.075, y1=datamin, line_color="black", line_width=2)
p.segment(x0=-0.075, y0=datamax, x1=0.075, y1=datamax, line_color="black", line_width=2)

show(p)
```
