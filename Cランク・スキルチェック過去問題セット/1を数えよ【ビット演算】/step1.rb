n = gets.to_i
nums = []

while n > 0
    nums << n % 2
    n /= 2
end

p nums.count(1)