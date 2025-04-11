h, w, d = gets.split.map(&:to_i)
nums = Array.new(h) { Array.new(w, 0) }
count = 1
  
diagonal = lambda do |y, x|
    while y >= 0 && x < w
      nums[y][x] = count
      count += 1
      y -= 1
      x += 1
    end
end
  
r_diagonal = lambda do |y, x|
    while x >= 0 && y < h
      nums[y][x] = count
      count += 1
      y += 1
      x -= 1
    end
end
  
case d
when 1
    (0...h).each do |i|
      diagonal.call(i, 0)
    end
    (1...w).each do |i|
      diagonal.call(h - 1, i)
    end
when 2
    (0...h).each do |i|
      (0...w).each do |j|
        nums[i][j] = count
        count += 1
      end
    end
when 3
    (0...w).each do |i|
      (0...h).each do |j|
        nums[j][i] = count
        count += 1
      end
    end
when 4
    (0...w).each do |i|
      r_diagonal.call(0, i)
    end
    (1...h).each do |i|
      r_diagonal.call(i, w - 1)
    end
end

puts nums.map { |row| row.join(' ') }