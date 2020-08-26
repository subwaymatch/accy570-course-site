import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue().rstrip(), 'Not Hot')