---
title: Creating and showing figures ➕
---

With Bokeh, there are two basic steps to creating a figure:

1. Using the `figure()` function, you must create a variable to store the figure information.
2. Using the `show()` function, you then tell Python to show the figure variable in your notebook.

Here is the basic code for the above two steps:

```python
myfig = figure(title='Our Empty Figure',
              plot_height=300,
              plot_width=425,
              x_axis_label = 'This is my x-axis',
              y_axis_label = 'This is my y-axis')

show(myfig)
```

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/bokeh-create-figure.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/bokeh-create-figure.png)
