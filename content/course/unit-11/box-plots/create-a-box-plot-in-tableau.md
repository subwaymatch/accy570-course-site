---
title: Create a box plot in Tableau 🟩
---

**Business Question**: You work for a professional sports team that is considering building a new stadium. Given the seating capacity for all stadiums in the NBA, MLB and NFL, half of the stadiums are larger than what amount (median)? The lower quarter of the stadiums are between what amounts? The upper quarter of the stadiums are between what amounts?

Create a box plot in Bokeh to answer this question.

### Creating a Box Plot in Tableau

If you have time: Experiment with the filter to filter between NBA, MLS and NFL stadiums, or create multiple box plots.

- There are multiple ways to create a box plot in Tableau. This guide showcases only one of them.
- First, drag our variable of interest into either columns or rows (depending on whether we want a vertical or horizontal box).
- Next, Go to "Analysis" menu on top and uncheck "Aggregate Measures".
- Right click on the axis and

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-initial-screen-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-initial-screen-01.png)

Drag `StadiumData.xlsx` into Tableau's window.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-drag-and-dropping-data-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-drag-and-dropping-data-01.png)

Click on "Sheet 1".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-click-on-sheet-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-click-on-sheet-01.png)

Drag "Use Pop" variable to the column pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-variable-of-interest-to-column-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-variable-of-interest-to-column-01.png)

Go to "Analysis" menu on top and uncheck "Aggregate Measures" option.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-uncheck-aggregate-option-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-uncheck-aggregate-option-01.png)

Right click on the "Use Pop" axis and select "Add Reference Line".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-right-click-reference-line-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-right-click-reference-line-01.png)

Select the "Box Plot" option. Check "Hide underlying marks" option and click "OK".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-reference-line-box-plot-options-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-reference-line-box-plot-options-01.png)

You should see the box plot. This step is optional. Select "Fit Height" in layout menu to expand your box plot.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-box-plot-fit-height-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-box-plot-fit-height-01.png)
