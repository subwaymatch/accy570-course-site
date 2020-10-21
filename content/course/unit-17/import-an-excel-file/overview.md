---
title: Overview of Importing an Excel Data into Pandas 🧭
---

Let's talk about what Excel stores for each cell in a worksheet.

- **Value**: Actual data value
- **Format**: How the value is represented
- **Formula**: Computation to derive an output
- Etc.

For example, say that cell A1 displays \$(3,000.00) from a formula `2000 - 5000`.

- The **value** is `-3000`.
- The **format** is "Accounting".
- The **formula** is `2000 - 5000`.

Because Excel stores metadata (format, formula, etc.) along with the actual value, Pandas can easily read values with the correct types from an Excel file.
