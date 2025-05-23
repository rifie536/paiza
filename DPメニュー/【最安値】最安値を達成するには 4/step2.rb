n, a, b = gets.split.map(&:to_i)

dp = Array.new(n + 6, Float::INFINITY)
dp[0] = 0

for i in 1..n + 4
    if i >= 2
        dp[i] = [dp[i - 2] + a, dp[i]].min
    end
    if i >= 5
        dp[i] = [dp[i - 5] + b, dp[i]].min
    end
end

result = Float::INFINITY
(n..n + 4).each do |i|
    result = [result, dp[i]].min
end

puts result