import unittest

tc = unittest.TestCase()
tc.assertTrue(7000 in items, 'Item for paycheck is missing')
tc.assertTrue(-2000 in items, 'Item for laptop purchase is missing')
tc.assertTrue(-100 in items, 'Item for grocery shopping missing')
tc.assertTrue(-1000 in items, 'Item for rent payment missing')
tc.assertTrue(-50 in items, 'Item for phone bill missing')
tc.assertEqual(len(items), 5, 'There should be 5 items in the list')