n = gets.to_i
board = { ball: 0, strike: 0 }

n.times do
    s = gets.chomp.to_sym
    board[s] += 1
    if board[:ball] == 4
        puts "fourball!"
    elsif board[:strike] == 3
        puts "out!"
    else
        puts s.to_s + "!"
    end
end