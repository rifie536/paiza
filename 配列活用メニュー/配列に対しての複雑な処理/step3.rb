n = gets.to_i
a = []

n.times do
    cmd = gets.chomp.split
    if cmd[0] == "in"
        a.push(cmd[1])
    else
        a.shift
    end
end

puts a