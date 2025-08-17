n = 4
pins = n.times.map { gets.split.map(&:to_i) }
pins_flat = pins.flatten
piecies = pins_flat.size
aim = 0
pins.each do |row|
    row.each do |pin|
        if pin == 1
            aim = piecies
        end
        piecies -= 1
    end
end

puts aim
puts pins_flat.count(1)