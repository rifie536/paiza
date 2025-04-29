n, k = gets.split.map(&:to_i)
students = {}
n.times do
    num, id = gets.split(' ')
    students[num.to_i] = id
end
k.times do
    q = gets.to_i
    puts students[q]
end