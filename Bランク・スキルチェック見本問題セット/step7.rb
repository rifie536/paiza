n = gets.to_i
a, b = gets.split.map(&:to_i)
seat = gets.split.map(&:to_i)

result = "Yes"
a.times do |i|
    seat_index = (b - 1 + i) % n
    if seat[seat_index] == 1
        result = "No"
        break
    else
        seat[seat_index] = 1
    end
end

puts result
puts seat.join(' ') if result == 'Yes'