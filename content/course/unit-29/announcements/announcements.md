---
title: Announcements 📣
---

- 😭 Final class today
  - Short 1-on-1 sessions
- 📗 Final Project
  - Due this Saturday (12/12) by the end of the day
  - Workday today
  - Task 4 CSV files check: Code at the bottom of this page.
- 🎄 If you get a chance, say thanks to Michael.
  - He's been attending the lectures although he didn't have to.
- 👉 Thursday's office hour will be shifted 1 hour earlier to 3-4 PM.
- 👉 I also plan to have office hours on both Friday and Saturday.
- 🚗 I am driving back and forth to Madison, WI from Thursday late-afternoon to Friday late-afternoon. I will be very slow in getting back to your emails for about 24 hours.

Copy &amp; paste the code below to a new code cell right before Task 5 in your `final_notebook.ipynb` notebook. If you don't see an error when you run the cell, your Tasks 1 through 4 are good.

```python
# Paste and run this code to a new code cell right before Task 5
# If you don't see an error, your CSV files are good to go!
pd.testing.assert_frame_equal(pd.read_csv('characters_cleaned.csv').reset_index(drop=True),
  pd.DataFrame({'Class': ['Light', 'Light', 'Medium', 'Medium', 'Heavy', 'Heavy', 'Heavy'],
  'Character': ['Baby Mario', 'Shy Guy', 'Daisy', 'Luigi', 'Donkey Kong', 'Metal Mario', 'Bowser'],
  'Weight': [2.25, 2.75, 3.25, 3.75, 4.25, 4.75, 4.75],
  'Speed': [2.25, 2.75, 3.25, 3.75, 4.25, 4.25, 4.75],
  'Acceleration': [3.25, 3.0, 2.75, 2.5, 2.25, 2.0, 2.0],
  'Handling': [4.75, 4.25, 3.75, 3.25, 4.25, 4.75, 4.75],
  'Traction': [4.5, 4.25, 4.0, 3.75, 3.5, 3.25, 3.25]}))

pd.testing.assert_frame_equal(pd.read_csv('bodies_cleaned.csv').reset_index(drop=True),
  pd.DataFrame({'Type': ['Kart', 'Kart', 'Kart', 'Kart', 'Kart', 'Bike'],
  'Body': ['Standard Kart', 'Gold Standard', 'Bandwagon', 'Biddybuggy', 'Pipe Frame', 'Jet Bike'],
  'Weight': [0.0, 0.25, 0.5, -0.5, 0.5, -0.25],
  'Speed': [0.0, 0.5, 0.0, -0.75, 0.0, 0.0],
  'Acceleration': [0.0, -0.25, -0.5, 1.25, 0.25, 0.75],
  'Handling': [0.0, 0.0, -0.5, 0.5, 0.5, 0.75],
  'Traction': [0.0, -1.0, 0.5, -0.25, -0.5, -1.25]}))

pd.testing.assert_frame_equal(pd.read_csv('tires_cleaned.csv').reset_index(drop=True),
  pd.DataFrame({'Type': [np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, np.nan],
  'Tire': ['Standard', 'Monster', 'Slick', 'Roller', 'Slim', 'Metal', 'Wood'],
  'Weight': [0.0, -0.5, 0.25, -0.5, 0.0, -0.5, -0.25],
  'Speed': [0.0, 0.0, 0.5, -0.5, 0.25, 0.25, -0.2],
  'Acceleration': [0.0, 0.0, -0.25, 1.0, 0.25, 0.25, 0.25],
  'Handling': [0.0, -0.75, 0.0, 0.25, 0.25, 0.0, -0.25],
  'Traction': [0.0, 0.75, -1.0, -0.25, -0.5, -0.5, 0.5]}))

printmd('Your CSV files look good!')
```

![Jupyter screenshot](https://accy570-fa2020-course-site-assets.s3-us-west-2.amazonaws.com/images/final-project-task4-csv-check-jupyter.png)
