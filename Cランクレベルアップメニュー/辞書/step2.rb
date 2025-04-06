n = gets.to_i
s = {}
n.times do
    name = gets.chomp
    s[name] = 0
end

m = gets.to_i
m.times do
    name, damage = gets.split(' ')
    s[name] += damage.to_i
end

name = gets.chomp

puts s[name]