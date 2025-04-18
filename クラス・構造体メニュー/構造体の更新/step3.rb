n = gets.to_i
users = []
n.times do
    user_info = gets.chomp.split
    users << user_info
end
sorted_users =  users.sort_by { |user| user[1] }
sorted_users.each { |user| puts user.join(' ') }