n, m = gets.split.map(&:to_i)

m.times do
 w = gets.to_i
 box = [((w + n / 2) / n), 1].max * n
 puts box
end