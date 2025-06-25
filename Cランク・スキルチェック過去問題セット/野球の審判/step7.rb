n = gets.to_i
board = []

n.times do
    s = gets.chomp
    board << s
    if board.count("strike") == 3
        puts "out!"
    elsif s == "strike"
        puts s + "!"
    else
        puts s
    end
end