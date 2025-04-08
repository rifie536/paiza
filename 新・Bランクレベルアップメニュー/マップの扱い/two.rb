h, w = gets.split(' ').map(&:to_i)
s = []
h.times { |i| s[i] = gets.chomp }
y, x = gets.split(' ').map(&:to_i)
s[y][x] == "#" ? s[y][x] = "." : s[y][x] = "#"
if y - 1 >= 0 then s[y - 1][x] == "#" ? s[y - 1][x] = "." : s[y - 1][x] = "#" end
if y + 1 < h then s[y + 1][x] == "#" ? s[y + 1][x] = "." : s[y + 1][x] = "#" end
if x - 1 >= 0 then s[y][x - 1] == "#" ? s[y][x - 1] = "." : s[y][x - 1] = "#" end
if x + 1 < w then s[y][x + 1] == "#" ? s[y][x + 1] = "." : s[y][x + 1] = "#" end

puts s