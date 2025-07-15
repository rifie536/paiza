n, x = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

current_sum = a[0, x].sum
max_sum = current_sum
start_idx = 0

(1..n-x).each do |i|
    current_sum = current_sum - a[i-1] + a[i+x-1]
    if current_sum > max_sum
      max_sum = current_sum
      start_idx = i
    end
end

puts [max_sum, a[start_idx]].join(' ')