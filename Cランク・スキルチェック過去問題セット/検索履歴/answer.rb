n = gets.to_i
history = []
n.times do
    w = gets.chomp.to_s
    if history.include?(w)
        history.delete(w)
    end
    history.push(w)
end

puts history.reverse