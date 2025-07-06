q = gets.to_i
nums = []

q.times do
    query = gets.split.map(&:to_i)
    nums.push(query[1]) if query[0] == 1
end

puts nums.length, nums