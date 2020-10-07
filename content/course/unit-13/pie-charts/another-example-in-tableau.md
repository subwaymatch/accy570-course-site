---
title: Another example in Tableau 🚀
---

Kickstarter ([https://www.kickstarter.com](https://www.kickstarter.com)) 🚴🏽‍♂️ is a crowdfunding website, where projects are posted and individuals can donate money to the project. How often are projects successful, failed, canceled, etc.?

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-screenshot-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-screenshot-01.png)

The excel file `Kickstarter Projects through 2016.xlsx` provides information about the projects that have been started on Kickstarter through 2016. This includes whether these projects were successful, failed, cancelled, etc. (this is the “Status” variable).

Drag `Kickstarter Projects through 2016.xlsx` file into Tableau. This time, you may only see the column headers without data. This is because the file is large (~33 MB). Tableau will defer loading the data until it actually uses it since it can slow down your computer.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-01-load-data.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-01-load-data.png)

Select `Status` and `Kickstarter Projects through 20 (Count)` variables by using Ctrl + Click.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-02-select-variables.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-02-select-variables.png)

Open the "Show Me" panel and select **_pie charts_** (circular icon).

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-03-pie-chart-preset.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-03-pie-chart-preset.png)

**(Optional)** Since the default pie chart is tiny, let's expand it 👀.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-04-entire-view.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-04-entire-view.png)

Now, we have the barebone.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-05-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-05-intermediate-result.png)

It's time to add labels. Drag the `Status` variable into "Label" box in "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-06-add-status-label.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-06-add-status-label.png)

Not bad 👨🏾‍🌾. But this only tells us an approximate breakdown.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-07-with-status-labels.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-07-with-status-labels.png)

Adding the number of projects in each "Status" category may be helpful. Drag `Kickstarter Projects through 20 (Count)` variable into the "Label" box in the "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-08-add-count-label.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-08-add-count-label.png)

🦄 Outstanding! While the count of each category is useful, using percentage breakdowns seemsmore intuitive.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-09-with-count-label.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-09-with-count-label.png)

Click on the arrow next to `CNT(Kickstar...)`. Select "Quick Table Calculation" - "Percent of Total".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-10-convert-to-percentages.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-10-convert-to-percentages.png)

🥁🥁 Our final result:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-10-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-10-final-result.png)
