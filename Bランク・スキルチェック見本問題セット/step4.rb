n = gets.to_i
a, b = gets.split.map(&:to_i)

seat_num = []
a.times do |i|
    seat_num << b
    b += 1
end

puts seat_num.join(' ')