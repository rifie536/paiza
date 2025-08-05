n = gets.to_i
a = n.times.map { gets.to_i }
pos, b = gets.split.map(&:to_i)
a.insert(pos, b)

puts a