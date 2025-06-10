x, y, z = gets.split.map(&:to_i)

cells = Array.new(x) { Array.new(y) { Array.new(z) } }

z.times do |z_layer|
  x.times do |x_pos|
    line = gets.chomp

    y.times do |y_pos|
      cells[x_pos][y_pos][z_layer] = line[y_pos]
    end
  end

  if z_layer < z - 1
    separator = gets.chomp
  end
end

projection = Array.new(z) { Array.new(y, '.') }

z.times do |z_pos|
  y.times do |y_pos|
    has_block = false
    x.times do |x_pos|
      if cells[x_pos][y_pos][z_pos] == '#'
        has_block = true
        break
      end
    end

    if has_block
      projection[z_pos][y_pos] = '#'
    end
  end
end

(z - 1).downto(0) do |z_pos|
  puts projection[z_pos].join
end