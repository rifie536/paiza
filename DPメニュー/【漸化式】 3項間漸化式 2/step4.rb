x, d1, d2 = gets.split.map(&:to_i)
q = gets.to_i
cumulative_sum = [0, x]

1000.times do |i|
    if i.odd?
        cumulative_sum[i + 2] = cumulative_sum[i + 1] + d1
    else
        cumulative_sum[i + 2] = cumulative_sum[i + 1] + d2
    end
end

q.times do
    k = gets.to_i
    puts cumulative_sum[k]
end