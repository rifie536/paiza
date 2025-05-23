n, x, a, y, b = gets.split.map(&:to_i)

dp = Array.new(n + y, Float::INFINITY)
dp[0] = 0

for i in 1..n + y -1
    if i >= x
        dp[i] = [dp[i - x] + a, dp[i]].min
    end
    if i >= y
        dp[i] = [dp[i - y] + b, dp[i]].min
    end
end

result = Float::INFINITY
(n..n + y - 1).each do |i|
    result = [result, dp[i]].min
end

puts result