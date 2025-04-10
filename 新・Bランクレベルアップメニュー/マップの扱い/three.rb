h, w = gets.split(' ').map(&:to_i)
s = []
h.times { |i| s[i] = gets.chomp }
y, x = gets.split(' ').map(&:to_i)

s[y][x] = (s[y][x] == "#" ? "." : "#")

directions = [
  [-1, 0],  # 上
  [1, 0],   # 下
  [0, -1],  # 左
  [0, 1],   # 右
  [-1, -1], # 左上
  [-1, 1],  # 右上
  [1, -1],  # 左下
  [1, 1]    # 右下
]

directions.each do |dy, dx|
  a = 1
  ny = y
  nx = x
  while (0...h).include?(ny) && (0...w).include?(nx)
    s[ny][nx] = (s[ny][nx] == "#" ? "." : "#")
    ny = y + dy * a
    nx = x + dx * a
    a += 1
  end
end

puts s