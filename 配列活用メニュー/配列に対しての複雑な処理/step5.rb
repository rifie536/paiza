require 'set'
n, k, f = gets.split.map(&:to_i)
a = k.times.map { gets.to_i }
a.shift(f)
a.to_set.each do |num|
    puts num
end