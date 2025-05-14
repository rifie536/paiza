x, d1, d2, k = gets.split.map(&:to_i)

for i in 2..k
    if i.odd?
        x += d1
    else
        x+= d2
    end
end

puts x