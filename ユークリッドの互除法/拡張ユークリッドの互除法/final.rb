a, b = gets.split.map(&:to_i)

def extended_gcd(a, b)
  return [1, 0] if b == 0

  x1, y1 = extended_gcd(b, a % b)
  x = y1
  y = x1 - (a / b) * y1

  [x, y]
end

puts extended_gcd(a, b).join(' ')
