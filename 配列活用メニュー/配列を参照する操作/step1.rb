n, k = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

puts a.count(k)