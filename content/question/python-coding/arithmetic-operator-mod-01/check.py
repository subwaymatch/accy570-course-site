import unittest

tc = unittest.TestCase()
tc.assertEqual(no_group_count, 3)
tc.assertEqual(sys.stdout.getvalue(), "3\n")