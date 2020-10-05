---
title: How to create a scatter plot in Tableau 🚲
---

**Example in Tableau** 🦮

You are creating a sales contract to sell 350 units of a good. Your company typically charges different prices depending on the number of units in the sale. You would like to base your pricing on what the company has done historically. You have unit and price data for the last 200 sales (excel file `ScatterExampleData.xlsx`).

Together, let’s create a scatter plot to see the relationship between the number of units sold and the price per unit. Also, add a trend line.

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png)

Drag `ScatterExampleData.xlsx` file into the Tableau window.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-00-drag-file-into-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-00-drag-file-into-tableau.png)

Drag `Number of Units in Contract` variable into the "Columns" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-01-drag-x-variable.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-01-drag-x-variable.png)

Drag `Price Per Unit Charaged` variable into the "Rows" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-02-drag-y-variable.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-02-drag-y-variable.png)

Click on `SUM(Number of Uni..)` in the "Columns" pane and convert the variable into a "Dimension". Since number of units in contract is a quantitative attribute, Tableau will aggregate it using `SUM()` by default. We tell Tableau NOT to aggregate it by converting it into a dimension.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-03-convert-x-variable-into-a-dimension.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-03-convert-x-variable-into-a-dimension.png)

Repeat the process with `SUM(Price Per Unit ..)`.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-04-convert-y-variable-into-a-dimension.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-04-convert-y-variable-into-a-dimension.png)

You should now be able to see the scatter plot.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05-final-result.png)

What if you want to see a fitting straight line between the two variables? You can achieve this using Tableau's _Trend Lines_.

Right-click on the scatter plot and select "Trend Lines" - "Show Trend Lines".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05A-add-a-trend-line.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05A-add-a-trend-line.png)

You should see a straight line that highlights the trends in your data.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05B-with-trend-line.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/scatter-tableau-05B-with-trend-line.png)

Again, there are many ways to create a scatter plot in Tableau. The method I've used here is what I consider to be "the easiest" 🏍.
