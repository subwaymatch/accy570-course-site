item_amounts = [7000, -2000, -100, -1000, -50]
total = 0

# Iterate over each item in the item_amounts list
# Note that you can use ANY valid variable name instead of "amount"
for amount in item_amounts:
	# Add transaction amount to "total"
	total = total + amount
	print(f'Added a transaction of {amount}. New total amount is {total}.')