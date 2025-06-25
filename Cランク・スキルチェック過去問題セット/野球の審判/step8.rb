n = gets.to_i
board = []

n.times do
    s = gets.chomp
    board << s
    if board.count("strike") == 3
        puts "out!"
    elsif board.count("ball") == 4
        puts "fourball!"
    else
        puts s + "!"
    end
end