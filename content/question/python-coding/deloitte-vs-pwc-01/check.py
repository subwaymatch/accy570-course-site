import unittest

tc = unittest.TestCase()
tc.assertEqual(deloitte_offer, 81000)
tc.assertEqual(pwc_offer, 85000)
tc.assertEqual(sys.stdout.getvalue().rstrip(), 'Accept PwC offer')