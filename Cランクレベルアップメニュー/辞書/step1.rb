n = gets.to_i
sa = {}
n.times do
    name, asset = gets.split(' ')
    sa[name] = asset
end
s = gets.chomp

puts sa[s]