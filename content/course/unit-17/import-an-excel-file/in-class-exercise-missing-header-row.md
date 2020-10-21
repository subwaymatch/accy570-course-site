---
title: 'In-class Exercise: Missing Header Row 🧰'
---

```python
# Check what happens first
df_games = pd.read_excel('excel-03-no-header.xlsx')
df_games
```

```python
# Try to use header=None
df_games = pd.read_excel('excel-03-no-header.xlsx', header=None)
df_games
```

```python
# Finally, supply column names ourselves!
column_names = ['Name', 'Average User Rating', 'User Rating Count', 'Price', 'Developer', 'Age Rating', 'Original Release Date', 'Current Version Release Date']
df_games = pd.read_excel('excel-03-no-header.xlsx', header=None, names=column_names)
df_games
```
