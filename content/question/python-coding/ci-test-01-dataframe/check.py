from pandas.testing import assert_frame_equal

df_test2 = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})

assert_frame_equal(df_test1, df_test2)