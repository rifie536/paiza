a, b, c = gets.split(' ').map(&:to_i)
a_to_b = {}
a.times do
    key, val = gets.split(' ').map(&:to_i)
    a_to_b[key] = val
end
b_to_c = {}
b.times do
    key, val = gets.split(' ').map(&:to_i)
    b_to_c[key] = val
end
a_to_c = []
a_to_b.each do |key, val|
    a_to_c << [key, b_to_c[val]]
end
a_to_c.sort.each { |result| puts result.join(' ') }