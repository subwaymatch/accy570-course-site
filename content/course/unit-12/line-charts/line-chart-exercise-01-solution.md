---
title: 'In-class Exercise: Line Chart Solution 🌕'
---

Open up Tableau.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-01-open-up-tableau.png)

Drag `Enron vs Competitors.xlsx` file into the Tableau window.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-07-drag-source-file-into-tableau.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-07-drag-source-file-into-tableau.png)

Drag `Fyear` variable into "Columns" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-08-drag-x-variable.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-08-drag-x-variable.png)

Drag `Measure Values` into "Rows" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-09-drag-y-variables.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-09-drag-y-variables.png)

What does the `Measure Values` field do? The `Measure Values` field contains all the measures in your data, collected into a single field with continuous values. If you're really _interested_ in digging deeper, you can refer to Tableau's explanation page at [https://help.tableau.com/current/pro/desktop/en-us/datafields_understanddatawindow_meavalues.htm](https://help.tableau.com/current/pro/desktop/en-us/datafields_understanddatawindow_meavalues.htm).

Right click on `CNT(Sheet1)` in "Measure Values" pane and click on "Remove".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-10-remove-non-used-measure-values.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-10-remove-non-used-measure-values.png)

You should see the line charts of operating income and operating cash flows for Enron and its competitors.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-11-line-charts-without-colors.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-11-line-charts-without-colors.png)

But it's difficult to comprehend the chart since all lines are of the same color. Drag `Measure Names` variable to "Color" box in "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-12-drag-measure-values-into-color.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-12-drag-measure-values-into-color.png)

Our final result 🛸:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-13-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/line-tableau-13-final-result.png)

**Interpretation**: Enron was having very steady increases in the years before their fall (2011), especially compared to their competitors. Also, cash flows dropped dramatically in 2000 and income was stated as increasing. Enron's fraud significantly impacted its competitors, who did not know how to keep up with the fraudulent company. Some of their competitors went out of business (e.g., Calpine).
