import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "15\n", "The printed result should be 15")
