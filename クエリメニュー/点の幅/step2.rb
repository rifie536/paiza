h, w, n = gets.split.map(&:to_i)
chocolate_nums = h.times.map { gets.split.map(&:to_i) }

cumulative_sum = Array.new(h + 1).map{ Array.new(w + 1, 0) }
h.times do |i|
    w.times do |j|
        cumulative_sum[i + 1][j + 1] = cumulative_sum[i + 1][j] + cumulative_sum[i][j + 1] - cumulative_sum[i][j] + chocolate_nums[i][j]
    end
end

n.times do
    y, x, outside, inside = gets.split.map(&:to_i)
    diff = (inside - 1) / 2
    center_chocolate_num = cumulative_sum[y + diff][x + diff] - cumulative_sum[y + diff][x - diff - 1] - cumulative_sum[y - diff - 1][x + diff] + cumulative_sum[y - diff - 1][x - diff - 1]
    thickness = (outside - inside) / 2 + diff
    chocolate_count = cumulative_sum[y + thickness][x + thickness] - cumulative_sum[y + thickness][x - thickness - 1] - cumulative_sum[y - thickness - 1][x + thickness] + cumulative_sum[y - thickness - 1][x - thickness - 1] - center_chocolate_num
    puts chocolate_count
end