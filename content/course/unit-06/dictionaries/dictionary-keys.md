---
title: Dictionary keys
questions:
  - multiple-choice/valid-dictionary-keys-01
  - multiple-choice/nested-dictionary-01
---

Here are a few naming rules on the dictionary keys.

- ✔️ Dictionary can have any of the "primitive" types (`int`, `bool`, `str`, `float`).
- ❌ Keys cannot be lists.
- ✔️ The keys must be **unique**.
- ✔️ Values can be any type.

```python
# Dictionary keys example
my_dict = {
  'Michael': ['Best', 'TA'],
  True: 'Boolean key',
  570: 'Integer key',
  1.1: 'Float key'
}

# Dictionary values example
another_dict = {
  'string': 'Some string',
  'integer': 100,
  'float': 5.55,
  'list': [1, 2, 3],
  'dictionary': {
    'explanation': 'This is a nested dictionary'
  }
}
```

If you use a non-primitive (e.g., lists, dicts) key, Python will throw a `TypeError: unhashable type` error 🚫.

```python
# Invalid key types
invalid_keys = {
  ['some', 'list']: 'A list key throws an error',
  { 'type': 'dictionary' }: 'A dictionary key throws an error'
}
# TypeError: unhashable type: 'list'
# TypeError: unhashable type: 'dict'
```
