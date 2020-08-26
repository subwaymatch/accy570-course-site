import unittest

tc = unittest.TestCase()
tc.assertEqual(float(sys.stdout.getvalue().rstrip()), 850.0)
