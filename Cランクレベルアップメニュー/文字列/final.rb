n = gets.chomp.to_i
n.times do
    t, h, m = gets.chomp.split(' ')
    th, tm = t.split(':').map(&:to_i)
    th += h.to_i
    tm += m.to_i

    if tm >= 60
        th += 1
        tm -= 60
    end
    if th >= 24
        th -= 24
    end

    puts "#{'%02d' % th}:#{'%02d' % tm}"
end
