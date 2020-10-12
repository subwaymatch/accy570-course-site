---
title: How to create a Location-based Map in Tableau 🥩
---

- Select the location variable and the variable that determines the shading (use `Ctrl` on Windows or `Cmd` on Mac to select both variables).
- Select the location-based map on the "Show Me" tab.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/cute-animals-parrots-branches-01.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/cute-animals-parrots-branches-01.png)

**Business Question**: How many charities are in each state in the contiguous U.S. (excluding Alaska and Hawaii)?

Together, let's create a location-based map using the `us-charities.csv` file.

Drag `us-charities.csv` into the Tableau window. Switch to "Sheet 1".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-01-load-file.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-01-load-file.png)

Select `State` and `us-charities.csv (Count)` together (using `Ctrl` in Windows or `Cmd` on a Mac).

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-02-select-variables-of-interest.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-02-select-variables-of-interest.png)

Once `State` and `us-charities.csv (Count)` are selected, open up the "Show Me" menu and Select **"maps"** (2nd option on the 2nd row).

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-03-select-map-preset.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-03-select-map-preset.png)

You should now see a location-based map 🌰!

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-04-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-04-intermediate-result.png)

Since we don't want Alaska and Hawaii to be included on our map (we still ❤️ Alaska & Hawaii), let's filter those two states out. Click on the "State" dropdown button in the "Marks" pane and select "Filter...".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-05-state-filter-open.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-05-state-filter-open.png)

Uncheck `AK`.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-06-unselect-alaska.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-06-unselect-alaska.png)

Find and uncheck `HI`. Click on "OK".

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-07-unselect-hawaii.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-07-unselect-hawaii.png)

The map is now zoomed in without Alaska and Hawaii.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-08-intermediate-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-08-intermediate-result.png)

Finally, let's add some text labels to make our visualization more readable. Drag `us-charities.csv (Count)` into the "Label" box inside the "Marks" pane.

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-09-drag-count-to-label.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-09-drag-count-to-label.png)

Final result 🚁:

![https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-10-final-result.png](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/tableau-lbm-in-class-10-final-result.png)
