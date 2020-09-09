import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'No\n', '5 is not included in the list')