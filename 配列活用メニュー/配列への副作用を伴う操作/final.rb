n, k = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

b = a.filter { |num| num >= k }

puts b