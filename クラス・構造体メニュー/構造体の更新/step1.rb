n = gets.to_i
n.times do
    user_info = gets.chomp.split
    user = <<~TEXT
    User{
    nickname : #{user_info[0]}
    old : #{user_info[1]}
    birth : #{user_info[2]}
    state : #{user_info[3]}
    }
    TEXT
    puts user
end