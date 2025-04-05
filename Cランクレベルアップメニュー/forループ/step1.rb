n = gets.to_i
a = gets.split(' ').map(&:to_i)
multiples_of_three = a.select { |n| n % 3 == 0 }
puts multiples_of_three.length