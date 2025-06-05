n, m = gets.split.map(&:to_i)

seat = Array.new(n, true)

m.times do
    a, b = gets.split.map(&:to_i)
    seat_start = b - 1
    can_sit = true

    a.times do |i|
        seat_index = (seat_start + i) % n

        if !seat[seat_index]
            can_sit = false
        end
    end

    if can_sit
        a.times do |i|
        seat_index = (seat_start + i) % n
        seat[seat_index] = false
        end
    end
end

puts seat.count(false)