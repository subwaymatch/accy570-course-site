---
title: Current working directory in Jupyter 🌼
---

Jupyter has a "current working directory". When you open a notebook in Jupyter, it sets the current working directory to the same folder as your notebook.

```python
# To get your current working directory
import os
os.getcwd()
```

While there are ways to change your "current working directory" in a Jupyter notebook, I do not recommend changing it for any reason. Changing the CWD (current working directory) will confuse the hell out of everyone (you, Michael, Park, your neighbor, your group members, etc.). 🌪
