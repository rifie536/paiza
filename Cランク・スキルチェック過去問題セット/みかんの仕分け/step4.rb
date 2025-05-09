n, m = gets.split.map(&:to_i)
k1, k2 = gets.split.map(&:to_i)
m.times do
    w = gets.to_i
    tmp1 = (k1 - w).abs
    tmp2 = (k2 - w).abs
    if tmp1 < tmp2
        puts k1
    else
        puts k2
    end
end