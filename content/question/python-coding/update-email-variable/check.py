import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "john@aol.com\njohn@gmail.com\n")
