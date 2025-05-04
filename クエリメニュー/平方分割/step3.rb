h, w, n = gets.split.map(&:to_i)
a = h.times.map { gets.split.map(&:to_i) }

cumulative_sum = Array.new(h + 1).map{ Array.new(w + 1, 0) }

h.times do |i|
  w.times do |j|
    cumulative_sum[i + 1][j + 1] = cumulative_sum[i + 1][j] + cumulative_sum[i][j + 1] - cumulative_sum[i][j] + a[i][j]
  end
end

n.times do
  y, x = gets.split.map(&:to_i)
  puts cumulative_sum[y][x]
end