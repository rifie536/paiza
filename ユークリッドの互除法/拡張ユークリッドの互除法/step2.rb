n = gets.to_i
a = n.times.map { gets.to_i }

def gcd(a, b)
    return a if b == 0
    gcd(b, a % b)
end

def gcd_super(numbers)
  result = numbers.first

  (1...numbers.size).each do |i|
    result = gcd(result, numbers[i])
    break if result == 1
  end

  result
end

puts gcd_super(a)