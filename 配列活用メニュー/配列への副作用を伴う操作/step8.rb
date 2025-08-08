n = gets.to_i
a = n.times.map { gets.to_i }

for i in 1...n
    for j in 0..(i - 1)
        puts a[i] * a[j]
    end
end