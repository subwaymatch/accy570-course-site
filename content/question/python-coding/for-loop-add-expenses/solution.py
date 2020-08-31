transactions = [-100, 200, -50, 50, 40, -200, -10, 500, -30, -50]
total_expense = 0

# Your code begins
for t in transactions:
  if t < 0:
    total_expense = total_expense + t
# Your code ends

print(f'Total expense: {total_expense}')