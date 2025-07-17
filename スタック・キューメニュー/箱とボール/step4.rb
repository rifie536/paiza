n = gets.to_i
s = gets.chomp.to_s
count = 0

s.each_char do |char|
    if char == "("
        count += 1
    elsif char == ")"
        count -= 1
        break if count < 0
    end
end

if count == 0
    puts "Yes"
else
    puts "No"
end