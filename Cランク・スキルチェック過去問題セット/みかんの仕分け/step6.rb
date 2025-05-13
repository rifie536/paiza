n, m = gets.split.map(&:to_i)
w = gets.to_i

(1..1500).each do |i|
  if i % n == 0
    puts "#{i} #{(i - w).abs}"
  end
end