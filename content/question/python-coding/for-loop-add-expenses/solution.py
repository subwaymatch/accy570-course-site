transactions = [-100, 200, -50, 50, 40, -200, -10, 500, -30, -50]
total_expense = 0

# Your code begins
# for each transaction item
for t in transactions:
  
  # If the transaction amount is less than 0
  if t < 0:
    # Add the amount to total_expense
    total_expense = total_expense + t
# Your code ends

print(f'Total expense: {total_expense}')