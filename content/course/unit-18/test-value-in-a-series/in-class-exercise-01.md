---
title: In-class Exercise 🗝
---

Use the file `US_graduate_admissions_cleaned.csv`.

| Column            | Meaning                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| Applicant ID      | Unique identifier for each applicant                                     |
| GRE Score         | Out of 340                                                               |
| TOEFL Score       | Out of 120                                                               |
| University Rating | 1-5 scale. Higher number means lower chance of admission.                |
| SOP               | 1-5 scale. Quality of statement of purpose. Higher number is better.     |
| LOR               | 1-5 scale. Quality of letter of recommendation. Higher number is better. |
| GPA               | Undergraduate GPA                                                        |
| Research          | 1 if student has research experience. 0 otherwise.                       |
| Chance of Admit   | 0.0 – 1.0. Probability of admission                                      |

1. Load the dataset into `df_admission`.
2. Filter the data so that you only have rows with `University Rating` equal to `1`.
   1. For the filtered dataset, compute the average probability of admission by running the command `df_admission['Chance of Admit'].mean()`.
   2. Repeat for University Ratings of `2`, `3`, `4`, `5`.
3. Filter the data so that you get applicants with a perfect GRE score (`340`), perfect SOP (`5`), and perfect LOR ratings (`5`).
   1. How many applicants meet these criteria?
   2. What is the average university rating for these people?
   3. What is the average chance of admission for these people?
