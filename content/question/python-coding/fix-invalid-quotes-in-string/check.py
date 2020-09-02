import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'PowerPoint\nWord\n')