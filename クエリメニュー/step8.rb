n, x, paiza_height = gets.split.map(&:to_i)
heights = [x, paiza_height]
n.times { heights << gets.to_i }
p heights.sort.index(paiza_height) + 1