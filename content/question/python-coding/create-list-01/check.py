import unittest

tc = unittest.TestCase()
tc.assertGreaterEqual(len(accy_courses), 1)

# Check if the printed string looks like a list
tc.assertEqual(sys.stdout.getvalue()[0], "[")
tc.assertEqual(sys.stdout.getvalue()[-2], "]")

for course in accy_courses:
  tc.assertIs(type(course), int)