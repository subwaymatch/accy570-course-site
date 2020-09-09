import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'You may pass.\n', 'The customer can enter with an annual pass')