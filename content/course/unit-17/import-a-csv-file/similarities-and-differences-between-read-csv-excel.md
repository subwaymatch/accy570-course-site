---
title: Similarities and differences between read_csv() and read_excel() 👈
---

**Similarities:**

- `header=None`
- `names=['your', 'column', 'names']`
- `skiprows=3`
- `skiprows=[1, 2, 3]`

**Differences:**

- Excel distinguishes between values and formats.
- CSV is a **text** format.
- Pandas will guess and convert text into `int`s, `float`s, dates, etc.
- However, Pandas may not be able to guess certain values or make incorrect guesses.
  - The text `$(3,107.82)` will _not_ be read in as a `float`. It will be read as a string.
  - Any date (e.g., 1/20/2017, 05SEP2001) will be read as a string.
- You either have to convert the value yourself, or tell `read_csv()` what types of conversions to make.
