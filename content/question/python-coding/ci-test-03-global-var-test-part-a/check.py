import unittest

tc = unittest.TestCase()
# This should fail in CI since some_global is NOT declared in solution.py for this question
tc.assertEqual(some_global, 10)
