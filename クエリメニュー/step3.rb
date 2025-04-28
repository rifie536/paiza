require "set"
n, q = gets.split.map(&:to_i)
arr = n.times.map { gets.to_i }.to_set
puts q.times.map { arr.include?(gets.to_i) ? "YES" : "NO" }