import unittest

tc = unittest.TestCase()
tc.assertEqual(my_str, "300")
tc.assertEqual(sys.stdout.getvalue(), "<class 'str'>\n")