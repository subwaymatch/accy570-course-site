import unittest

check_str = 'The panda is eating a bamboo!'

tc = unittest.TestCase()
tc.assertEqual(my_panda, check_str);
tc.assertEqual(sys.stdout.getvalue(), check_str + '\n')