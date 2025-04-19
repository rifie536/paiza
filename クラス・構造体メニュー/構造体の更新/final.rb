n, k = gets.split.map(&:to_i)
users = []
n.times do |i|
    users[i] = gets.chomp.split
end

def changeName(users, num, name)
    users[num.to_i - 1][0] = name
end

k.times do
    num, name = gets.chomp.split
    changeName(users, num, name)
end

users.each { |user| puts user.join(' ') }