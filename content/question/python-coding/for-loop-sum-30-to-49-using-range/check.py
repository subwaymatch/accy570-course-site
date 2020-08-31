import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "790\n", "Sum of all numbers from 30 to 49 is 790")
