100.times do
    max_num = 0
    100.times do
        a = gets.to_i
        max_num = a if a > max_num
    end
    puts max_num
end