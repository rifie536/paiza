n, k, m = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }
b = a.sort.reverse
b.shift(m)
passed_b = b.filter { |num| num >= k }

puts passed_b.size