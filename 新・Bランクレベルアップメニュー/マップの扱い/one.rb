h, w = gets.split(' ').map(&:to_i)
s = []
h.times { |i| s[i] = gets.chomp }
y, x = gets.split(' ').map(&:to_i)
s[y][x] == "#" ? s[y][x] = "." : s[y][x] = "#"
puts s