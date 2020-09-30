---
title: Create a histogram in Tableau 🐇
---

### Creating a Histogram in Tableau

We know how to create a bar chart in Tableau. There is one additional step for histograms: We must create a variable for our bins.

- Right click the variable of interest, select create, then select bins.
- Enter the bin size or bin width.

**In-class Exercise 2**

Create a histogram in Tableau using the `StadiumData.xlsx` spreadsheet. The stadium population variable is called `SeatCapacity`.

Note: Tableau begins the bins at zero, so use a bin size of 15500.

Experiment with different bin sizes (e.g., 1000 or 50000)

**If you have time**: Experiment with the filter to filter between NBA, MLB and NFL stadiums.

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-initial-screen-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-initial-screen-01.png)

Drag `StadiumData.xlsx` into Tableau's window.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-drag-and-dropping-data-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-drag-and-dropping-data-01.png)

Click on "Sheet 1".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-click-on-sheet-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-click-on-sheet-01.png)

Click on "Use Pop" and select "Show Me" menu on the right. Click on the thumbnail that looks like a histogram.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-show-me-histogram-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-show-me-histogram-01.png)

You should see a new "Use Pop (bin)" variable on the left. Right click on it and select "Edit...".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-selecting-histogram-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-after-selecting-histogram-01.png)

Update the size of bins. For this example, we'll use 15,500. Click OK.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-edit-bin-options-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-edit-bin-options-01.png)

You should be able to see the updated histogram.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-historam-after-editing-bin-size-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-historam-after-editing-bin-size-01.png)

Note that Tableau's first bin always start at zero 👿👺👿👺.
