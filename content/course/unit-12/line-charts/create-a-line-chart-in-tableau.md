---
title: How to create a line chart in Tableau 📉
---

![Equipment](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/isometric-concept-people-working-with-technology-006.jpg)

**Example in Tableau** 🦮

Your company is considering leasing a piece of equipment for 10 years at a 10% rate. This lease would be a financing lease (capital lease). Payments of 100,000 are made annually. Your CFO would like to know how the value of the lease liability and the lease asset (ROU asset) would look each year on the balance sheet and how they would change over time.

The excel file `LeaseExample.xlsx` provides the date of each payment, the lease liability after each payment and the lease asset after amortization each year.

Together, let’s create a line chart in tableau to provide this information to the CEO.

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png)

Drag `LeaseExample.xlsx` file into Tableau window. Once you see some data, click on "Sheet 1" at the bottom.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-02-drag-source-file-into-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-02-drag-source-file-into-tableau.png)

Drag `Date` variable on the left to "Columns" pane. By default, Tableau should extract year.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-03-drag-x-variable.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-03-drag-x-variable.png)

Drag `Lease Liability` and `ROU Asset (Lease Asset)` into "Rows" pane. Tableau will aggregate those values with `SUM()` by default.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-04-drag-y-variables.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-04-drag-y-variables.png)

Open up "Show Me" menu on the top-right. Select "dual lines".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-05-select-line-charts-in-presets.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-05-select-line-charts-in-presets.png)

You should be able to see two line charts merged into a single figure.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-06-line-chart-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-06-line-chart-result.png)

Leased asset decreases in a straight line. What does this tell you? The leased asset is amortized using a straight line depreciation. However, the lease liability decreases at a different rate. This is because the liability is reduced depending on the interest for the period.

Note that there are multiple ways to create line charts in Tableau. This guide showcases only one of them.
