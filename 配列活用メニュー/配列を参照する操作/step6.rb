n, k = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

if a.include?(k)
    puts a.index(k) + 1
else
    puts -1
end