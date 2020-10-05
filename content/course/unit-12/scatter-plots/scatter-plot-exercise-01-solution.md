---
title: 'In-class Exercise: Scatter Plot Solution 🌕'
---

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png)

Drag `2017Operating Income vs. Operating CF.xlsx` file into the Tableau window. Once you see the data, click on "Sheet 1" at the bottom.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-06-drag-source-file.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-06-drag-source-file.png)

Drag `Oancf` into the "Columns" pane and drag `Oiadp` into the "Rows" pane. You should see a single circular mark.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-07-drag-x-and-y-variables.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-07-drag-x-and-y-variables.png)

Click on `SUM(0ancf)` in the "Columns" pane and convert it to a dimension. This tells Tableau to treat each value separately instead of aggregating it.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-08-convert-x-variable-into-a-dimension.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-08-convert-x-variable-into-a-dimension.png)

Repeat the process for `SUM(Oiadp)`. Click on `SUM(Oiadp)` in the "Rows" pane and convert it to a dimension. Again, this tells Tableau to draw a mark for each value.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-09-convert-y-variable-into-a-dimension.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-09-convert-y-variable-into-a-dimension.png)

You should now be able to see the scatter plot.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-10-scatterplot-without-trend-line.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-10-scatterplot-without-trend-line.png)

You can add a trend line to see the correlation between the two variables. Right-click on the scatter plot and select "Trend Lines" - "Show Trend Lines".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-11-scatterplot-add-trend-line.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-11-scatterplot-add-trend-line.png)

Our final result:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-12-scatterplot-with-trend-line.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-12-scatterplot-with-trend-line.png)
