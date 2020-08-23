import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), "Hello World\n")
