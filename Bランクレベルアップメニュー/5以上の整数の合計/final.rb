n = gets.to_i
ans = 0
n.times do
    num = gets.to_i
    ans += num if num >= 5
end

puts ans