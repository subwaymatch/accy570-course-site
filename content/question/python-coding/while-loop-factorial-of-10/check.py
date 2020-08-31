import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "3628800\n", "The printed result should be 3628800")
