import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "Red flag detected: 30000 ends with three or more zeros.\nRed flag detected: 62000 ends with three or more zeros.\n")