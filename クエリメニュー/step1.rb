n, k , q = gets.split.map(&:to_i)
n.times do |i|
    a = gets.to_i
    puts a
    puts q if i == k - 1
end