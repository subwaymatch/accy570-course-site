---
title: Create a Histogram in Bokeh 🟡
---

1. Choose the number of bins (`numbins`).
2. Determine the `max_value` and `min_value`
3. Calculate the bin width

```python
binwidth = (max_value - min_value) / numbins
```

4. Determine the edges of the rectangles/bars

```python
edges = [min_value,
        min_value + binwidth,
        min_value + 2 * binwidth,
        min_value + 3 * binwidth,
        ...
        max_value]
```

All but the last bin is half-open (i.e., [left edge, right edge)

5. Create a list to store the counts.

```python
counts = [0] * numbins
```

6. Iterate over the data and add to the counts list if a number falls into that bin.

### In-class Exercise 1a

**Business Question**: You work for a professional sports team that is considering building a new stadium. You want to know about the capacity of other stadiums. Given all stadiums in the NBA, MLB and NFL, what is the distribution of the number of seats?

Using the list `stadium_pop` obtained from the `StadiumData.xlsx` file on Compass, compute these variables assuming the number of bins is 5.

1. `numbins`
2. `max_value` and `min_value`
3. `binwidth`
4. `edges`
5. We will create `counts` together

Once we have all the pieces, we can create a figure and draw Histogram in Bokeh!

```python
# Creates a blank canvas to work with
p = figure(title='ENTER TITLE HERE',
           x_axis_label='Your x Label', y_axis_label='Your y Label',
           plot_width = 400, plot_height = 400)

# Draw rectangles
p.quad(top=counts, bottom=0,
       left=edges[:-1], right=edges[1:],
       fill_color='navy', line_color='white', alpha=0.6)

show(p)
```

### In-class Exercise 1b

**Business Question**: You work for a professional sports team that is considering building a new stadium. You want to know about the capacity of other stadiums. Given all stadiums in the NBA, MLB and NFL, what is the distribution of the number of seats?

Create a histogram in _Bokeh_ using the variables created in the earlier exercise.
