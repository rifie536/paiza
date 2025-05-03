n, k = gets.split.map(&:to_i)
numbers = n.times.map { gets.to_i }

cumulative_sum = [0]
numbers.each_with_index do |number, i|
    cumulative_sum[i + 1] = cumulative_sum[i] + number
end

k.times do
    q = gets.to_i
    puts cumulative_sum[q]
end