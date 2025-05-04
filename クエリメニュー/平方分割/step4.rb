h, w, n = gets.split.map(&:to_i)
array = h.times.map { gets.split.map(&:to_i) }

cumulative_sum = Array.new(h + 1).map { Array.new(w + 1, 0) }

h.times do |i|
    w.times do |j|
        cumulative_sum[i + 1][j + 1] = cumulative_sum[i + 1][j] + cumulative_sum[i][j + 1] - cumulative_sum[i][j] + array[i][j]
    end
end

n.times do
    a, b, c, d = gets.split.map(&:to_i)
    puts cumulative_sum[c][d] - cumulative_sum[c][b - 1] - cumulative_sum[a - 1][d] + cumulative_sum[a - 1][b - 1]
end