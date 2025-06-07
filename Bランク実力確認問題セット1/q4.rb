s = gets.chomp.to_s
command = ""
s.length.times do |i|
    command += s[i]
    if command.include?("LLLRB")
        puts "rolling"
        command = ""
    elsif command.include?("DDRRA")
        puts "upper"
        command = ""
    elsif command.include?("AAAAA")
        puts "rush"
        command = ""
    else
        next
    end
end