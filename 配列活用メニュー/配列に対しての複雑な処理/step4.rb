n = gets.to_i
heights = n.times.map { gets.to_i }.sort

min_pair = heights.each_cons(2).min_by { |a, b| b - a }

puts min_pair[0]
puts min_pair[1]