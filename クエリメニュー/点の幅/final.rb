def calc_max_and_min(students_array, max_student_num, min_student_num, sqrt_stundents, sqrt_range_max, sqrt_range_min)

    max = -Float::INFINITY
    min = Float::INFINITY

    while min_student_num <= max_student_num
        if min_student_num % sqrt_stundents == 0 && min_student_num + sqrt_stundents < max_student_num
            idx = min_student_num / sqrt_stundents
            max = [sqrt_range_max[idx], max].max
            min = [sqrt_range_min[idx], min].min
            min_student_num += sqrt_stundents
        else
            max = [students_array[min_student_num], max].max
            min = [students_array[min_student_num], min].min
            min_student_num += 1
        end
    end

    return max, min
end

n, k = gets.split.map(&:to_i)
s = n.times.map { gets.to_i }

block_size = Math.sqrt(n).to_i
block_count = (n.to_f / block_size).ceil

block_max = Array.new(block_count, -Float::INFINITY)
block_min = Array.new(block_count, Float::INFINITY)

n.times do |i|
    idx = i / block_size
    block_max[idx] = [s[i], block_max[idx]].max
    block_min[idx] = [s[i], block_min[idx]].min
end

k.times do
    al, ar, bl, br = gets.split.map { |num| num.to_i - 1}
    a_max, a_min = calc_max_and_min(s, ar, al, block_size, block_max, block_min)
    b_max, b_min =calc_max_and_min(s, br, bl, block_size, block_max, block_min)

    a_score = a_max - a_min
    b_score = b_max - b_min

    if a_score == b_score
        puts "DRAW"
    elsif a_score > b_score
        puts "A"
    else
        puts "B"
    end
end