import unittest

tc = unittest.TestCase()
tc.assertAlmostEqual(diff, 2.5)
tc.assertEqual(sys.stdout.getvalue(), "<class 'float'>\n")