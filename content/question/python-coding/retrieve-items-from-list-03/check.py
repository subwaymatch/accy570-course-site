import unittest

tc = unittest.TestCase()
tc.assertEqual(my_pick, 'pizza')
tc.assertEqual(sys.stdout.getvalue(), 'pizza\n')