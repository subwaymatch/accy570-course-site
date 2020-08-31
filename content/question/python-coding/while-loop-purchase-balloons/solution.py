budget = 20
balloon_price = 3
num_balloons = 0

# Your code begins
# While your budget is greater than 0
while budget > 0:
	# Subtract the price of a balloon from your budget
	budget = budget - balloon_price

	# Increment the number of balloons by 1
	num_balloons = num_balloons + 1
# Your code ends

print(f'You purchased {num_balloons} balloons!')