n, m = gets.split.map(&:to_i)
m.times do
    w = gets.to_i
    if w % n == 0
        puts "Yes"
    else
        puts "No"
    end
end