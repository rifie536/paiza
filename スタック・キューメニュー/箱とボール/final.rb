n = gets.to_i
a = gets.split.map(&:to_i)
box = []

n.times do |i|
    box << a[i]
    while box.size >= 2 && box[-1] == box[-2]
        num = box.last * 2
        box.pop
        box.pop
        box << num
    end
end

puts box.reverse