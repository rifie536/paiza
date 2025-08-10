require 'set'
n = gets.to_i
a = n.times.map { gets.to_i }
b = a.to_set

b.each do |num|
    puts num
end