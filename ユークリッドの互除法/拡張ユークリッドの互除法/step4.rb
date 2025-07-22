a, b, c = gets.split.map(&:to_i)

if c == a % b
    q = a / b
    puts [1, -q].join(' ')
elsif c == b % a
    q = b / a
    puts [-q, 1].join(' ')
end