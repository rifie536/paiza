x, d, k = gets.split.map(&:to_i)
a = [0, x]
for i in 2..k
    a[i] = a[i - 1] + d
end

puts a[k]