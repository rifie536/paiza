def gcd(a, b)
    return a if b == 0
    gcd(b, a % b)
end

a, b = gets.split.map(&:to_i)

puts gcd(a, b)