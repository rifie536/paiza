a, b = gets.split.map(&:to_i)

def gcd(a, b)
    return a if b == 0
    gcd(b, a % b)
end

def lcm(a, b)
    return a * b / gcd(a, b)
end

puts lcm(a, b)