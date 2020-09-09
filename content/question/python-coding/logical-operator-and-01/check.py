import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'Yay! Tory can hop on.\n', 'Check your comparison logic')