import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue().rstrip(), 'Accept PwC offer')