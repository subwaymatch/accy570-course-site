import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "0\n1\n2\n3\n4\n", "Please check your range")
