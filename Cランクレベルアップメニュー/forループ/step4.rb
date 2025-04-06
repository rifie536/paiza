n = gets.to_i
c = []
n.times { |i| c[i] = gets.chomp.to_s }
d = gets.to_i
s = []
d.times { |i| s[i] = gets.chomp.to_s }

n.times do |i|
    d.times do |j|
        exist = s[j].include?(c[i])
        if exist
            puts "YES"
        else
            puts "NO"
        end
    end
end