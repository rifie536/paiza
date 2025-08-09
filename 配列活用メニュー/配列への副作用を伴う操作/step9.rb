N, n = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

for i in 0...n
    if a[i]
        puts a[i]
    else
        puts 0
    end
end