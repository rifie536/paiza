n, m = gets.split.map(&:to_i)

seats = Array.new(n, false)

m.times do
  a, b = gets.split.map(&:to_i)

  start_seat = b - 1

  can_sit = true
  a.times do |offset|
    seat_index = (start_seat + offset) % n
    if seats[seat_index]
      can_sit = false
      break
    end
  end

  if can_sit
    a.times do |offset|
      seat_index = (start_seat + offset) % n
      seats[seat_index] = true
    end
  end
end

seated_count = seats.count(true)
puts seated_count