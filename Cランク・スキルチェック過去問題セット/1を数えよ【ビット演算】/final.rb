n = gets.to_i
count = 0
while n > 0
  n = n & (n - 1)
  count += 1
end

puts count