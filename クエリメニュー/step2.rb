n, k = gets.split.map(&:to_i)
a = []
n.times { |i| a[i] = gets.to_i }
puts a.include?(k) ? "YES" : "NO"