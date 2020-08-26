import unittest

tc = unittest.TestCase()
tc.assertAlmostEqual(float(sys.stdout.getvalue().rstrip()), 3.2)
