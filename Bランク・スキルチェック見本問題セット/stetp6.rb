n, m = gets.split.map(&:to_i)

m.times do
    a, b = gets.split.map(&:to_i)
    seat_num = []
    a.times do |i|
        seat_index = (b + i) % n
        if seat_index == 0
            seat_num << b + i
        else
            seat_num << seat_index
        end
    end
    puts seat_num.join(' ')
end