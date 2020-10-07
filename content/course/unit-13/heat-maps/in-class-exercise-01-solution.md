---
title: In-class exercise solution
---

Drag `Kickstarter Projects through 2016.xlsx` file into Tableau. You may only see the column headers without data. Again, this is because the file is large (~33 MB). Tableau will defer loading the data until it actually uses it since it can slow down your computer.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-01-load-data.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/pie-kickstarter-01-load-data.png)

Drag `Deadline` into the "Columns" pane. Tableau will extract the year by default.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-02-drag-deadline-into-columns.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-02-drag-deadline-into-columns.png)

Note that the previous step may take a while 🐢. You will likely encounter the message box below:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-03-loading-progress.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-03-loading-progress.png)

Drag `Deadline` into the "Rows" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-03-drag-deadline-into-rows.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-03-drag-deadline-into-rows.png)

Click on the right arrow of "Year(Deadline)" label in the "Rows" pane and select "Day". This tells Tableau to extract only the day of the month (e.g., 1, 2, 3, ..., 30, 31) instead of the year.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-04-convert-rows-to-days.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-04-convert-rows-to-days.png)

Drag `Kickstarter Projects through 20 (Count)` variable into the "Text" box in the "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-05-count-to-text.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-05-count-to-text.png)

You should see 🍀:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-06-with-count-text.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-06-with-count-text.png)

It's time to add colors into our table 🌈. Drag `Kickstarter Projects through 20 (Count)` variable into the "Color" box in the "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-07-count-to-color.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-07-count-to-color.png)

You should see colored text.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-08-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-08-intermediate-result.png)

In the "Marks" pane, change "Automatic" to "Square" 🟦.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-09-select-square-marks.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-09-select-square-marks.png)

🎊🎉🎏 Our final result:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-10-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/kickstarter-heatmap-10-final-result.png)
