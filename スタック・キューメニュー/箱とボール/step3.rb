n = gets.to_i
arr = gets.chomp.split
tmp = []
arr.each do |char|
    if char == "+"
        a = tmp.pop
        b = tmp.pop
        tmp.push(a + b)
    elsif char == "-"
        a = tmp.pop
        b = tmp.pop
        tmp.push(b - a)
    else
        tmp.push(char.to_i)
    end
end

puts tmp