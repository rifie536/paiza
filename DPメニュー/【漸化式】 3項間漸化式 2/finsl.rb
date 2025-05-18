q = gets.to_i

a = [0, 1, 1]
for i in 3..40
    a[i] = a[i - 2] + a[i - 1]
end

q.times do
    k = gets.to_i
    puts a[k]
end