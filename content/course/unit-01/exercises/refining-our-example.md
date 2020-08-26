---
title: Refining our Example
questions:
  - python-coding/deloitte-vs-pwc-02
---

Our code does not cover every possible value of the inputs. Specifically, it does not handle the case where the two offers are exactly equal.

This is a logic problem, not a coding problem.

How can we refine our decision logic to handle this?

**Some possible strategies:**

1. Assume a slight preference for one firm, so if the offers are exactly equal, you choose the firm you prefer.
2. Assume a preference for one firm, but put a dollar figure on it. For example, you prefer PwC, but if the Deloitte offer exceeds the PwC offer by at least 5,000, you will take the Deloitte offer.
3. If the two offers are exactly equal, choose randomly between them.
