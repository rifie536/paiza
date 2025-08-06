n = gets.to_i
a = n.times.map { gets.to_i }
b = gets.to_i
a.delete_at(b - 1)

puts a