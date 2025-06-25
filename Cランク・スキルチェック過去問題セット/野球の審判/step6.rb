n = gets.to_i
board = []
n.times do
    s = gets.chomp
    board << s
    if s == "strike"
        puts s + "!"
        puts board.count(s)
    else
        puts s
    end
end