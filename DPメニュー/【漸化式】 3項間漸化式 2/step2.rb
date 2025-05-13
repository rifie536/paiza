x, d = gets.split.map(&:to_i)
q = gets.to_i
a = [0, x]
1000.times do |i|
    a[i + 2] = a[i + 1] + d
end

q.times do |i|
    k = gets.to_i
    puts a[k]
end