import unittest

tc = unittest.TestCase()
tc.assertEqual(sys.stdout.getvalue(), 'People always ask me, "Were you funny as a child?" Well, no, I was an accountant.\n')