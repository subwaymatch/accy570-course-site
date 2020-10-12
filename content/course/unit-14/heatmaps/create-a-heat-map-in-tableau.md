---
title: How to create a heat map in Tableau 🌳
---

- Drag variables to columns and rows.
- Drag the variable that will determine shape size to the size square in the Marks box.
- Just like any other visualizations, there are multiple ways to create heat maps. 🍂

**In-class Example**

Let's create a heat map of LA traffic collision with shapes.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/two-cars-after-collision-illustration@2x.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/two-cars-after-collision-illustration@2x.png)

- Use `LA–traffic-collision-data-from-2010-to-present.xlsx`.
- `Day` (day of the week) is our columns.
- `Time slot` is our rows.
- The number of records determines the size of our shape. ◾️◼️⬛️

Drag `LA–traffic-collision-data-from-2010-to-present.xlsx` into Tableau. Since the file is large, you will only see the column headers. Click on "Update Now" to load the data. this will take up to a few minutes.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-01-load-data.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-01-load-data.png)

Once the data is loaded, click on "Sheet 1" at the bottom.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-02-go-to-sheet.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-02-go-to-sheet.png)

Drag `Day` into the _Columns_ pane and `Time Slot` into the _Rows_ pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-03-drag-variables.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-03-drag-variables.png)

Drag `LA traffic-collision-data-from- (Count)` into the _Size_ box in the _Marks_ pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-04-drag-count-into-size.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-04-drag-count-into-size.png)

Cool, huh? 🐵

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-05-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-05-intermediate-result.png)

**(Optional) Steps from here are optional.** What if you want to use a different color? First, drag `LA traffic-collision-data-from- (Count)` into the _Color_ box in the _Marks_ pane. This adds a gradient to your shapes based on counts.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-06-drag-count-into-color.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-06-drag-count-into-color.png)

Click on _Color_ - _Edit Colors..._.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-07-color-option.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-07-color-option.png)

Select a palette you like. 🌈

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-08-select-palette.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-08-select-palette.png)

Final result 🍇:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-09-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-hm-example-09-final-result.png)
