import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'Hello, Chulin!\nHello, Seung Jun!\nHello, Peter!\nHello, Madison!\n')