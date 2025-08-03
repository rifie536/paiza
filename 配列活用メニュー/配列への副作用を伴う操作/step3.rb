n = gets.to_i
a = n.times.map { gets.to_i }
x, y = gets.split.map { |num| num.to_i - 1 }
a[x], a[y] = a[y], a[x]

puts a