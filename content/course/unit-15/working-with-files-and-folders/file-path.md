---
title: File Path ⚓️
---

- Every file has only one "parent" folder. The "child" folder is also known as a subfolder.
- Every folder has only one "parent" folder (except the _root_ folder).
- Because of the two properties above, it's possible to write a "path" for every file on a drive.
- A path is analogous to a street address. It provides the location of the file. 🏡
- **When you want to tell Python to open a file, you must provide the path to the file.**

Assume, you're working with the primary drive on your computer (i.e., not a USB drive, SD card, or external hard drives).

- **On Windows**: The root folder is usually `C:\` 💾.
- **On Mac**: The root folder is `/` (yes, that's a single forward slash) 🧰.

You often need to know your _username_. Sometimes, your operating system may have already chosen one for you! To find your username, run the following code on your Jupyter notebook.

```python
import os

print(os.getlogin())
```
