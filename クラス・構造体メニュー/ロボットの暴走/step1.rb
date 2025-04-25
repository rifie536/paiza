n, k, s = gets.split.map(&:to_i)
chars = []
routes = []

n.times do
    char, *r = gets.split
    chars << char
    routes << r.map(&:to_i)
end

keywords = [chars[s - 1]]

k.times do
    m = gets.to_i
    keywords << chars[routes[s - 1][m - 1] - 1]
    s = routes[s - 1][m - 1]
end

puts keywords.join