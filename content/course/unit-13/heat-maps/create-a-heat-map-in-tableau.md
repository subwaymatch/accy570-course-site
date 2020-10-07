---
title: How to create a heat map in Tableau 🧙🏼‍♂️
---

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/ny-agi-heatmap-illustration-01.jpg](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/ny-agi-heatmap-illustration-01.jpg)

**Business Question**: What Adjusted Gross Income (AGI) Range do most full-year residents, part-year residents, and full-year nonresidents fall into when filing their tax returns?

Together, let’s recreate a highlight table of the AGI ranges for the number of returns filed in New York using `New York Tax Data.xlsx`.

Load `New York Tax Data.xlsx` file into Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-01-load-data.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-01-load-data.png)

Drag `NY Adjusted Gross Income Range ...` into the "Rows" pane. Drag `NYS Residency Status` into the "Columns" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-02-drag-variables-to-rows-and-columns.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-02-drag-variables-to-rows-and-columns.png)

**(Optional)** Switch to "Entire View" in the "Fit" dropdown box.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-03-entire-view.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-03-entire-view.png)

Drag the `Number of Returns` measure into the "Text" box in the "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-04-number-of-returns-text.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-04-number-of-returns-text.png)

Drag the `Number of Returns` measure into the "Color" box in the "Marks" pane. Higher number of returns will create darker colored texts.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-05-number-of-returns-color.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-05-number-of-returns-color.png)

This is what you should see. It may vary slightly depending on your Tableau version.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-06-text-with-colors.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-06-text-with-colors.png)

Instead of text colors, we want to create background colors. To do so, change "Automatic" to "Square" in the "Marks" pane dropdown box.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-07-select-square-marks.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-07-select-square-marks.png)

Finally, we are getting closer! There are a few clean-ups left to do. First, "Under \$1" income bracket is at the bottom. It should be on top. Second, "All Income Ranges" row cause all other rows to look insignificant.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-08-square-marks-with-colors.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-08-square-marks-with-colors.png)

Drag "Under \$1" to the top of the table.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-09-drag-under-1-to-top.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-09-drag-under-1-to-top.png)

Intermediate result 🍗:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-10-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-10-intermediate-result.png)

Right click on "All Income Ranges" and click "Exclude". This will remove the row from our heat map.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-11-exclude-all-income-ranges.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-11-exclude-all-income-ranges.png)

🌌 Our final result (pretty cool, isn't it? 🦜) :

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-12-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/nytax-heatmap-12-final-result.png)
