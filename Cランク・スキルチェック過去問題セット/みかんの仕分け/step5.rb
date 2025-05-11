n, m = gets.split.map(&:to_i)

pieces_of_box = gets.to_i
kind_of_box = gets.split.map(&:to_i)

m.times do
  w = gets.to_i
  ans = -100000

  pieces_of_box.times do |i|
    if kind_of_box[i] % n == 0
      if (kind_of_box[i] - w).abs <= (ans - w).abs
        ans = kind_of_box[i]
      end
    end
  end

  puts ans
end