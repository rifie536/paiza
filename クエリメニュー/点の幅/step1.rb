n, k = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

cumulative_sum = [0]
a.each_with_index do |num, i|
    cumulative_sum[i + 1] = cumulative_sum[i] + num
end

k.times do
    a_score = 0
    b_score = 0
    al, ar, bl, br = gets.split.map(&:to_i)

    a_score = cumulative_sum[ar] - cumulative_sum[al - 1]
    b_score = cumulative_sum[br] - cumulative_sum[bl - 1]

    a_score = -1 if ar - al + 1 >= n.to_f / 3
    b_score = -1 if br - bl + 1 >= n.to_f / 3

    if a_score == b_score
        puts "DRAW"
    elsif a_score > b_score
        puts "A"
    else
        puts "B"
    end
end