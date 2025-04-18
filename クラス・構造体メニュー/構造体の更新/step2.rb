n = gets.to_i
students = []
n.times do
    student_info = gets.chomp.split
    student = {
        name: student_info[0],
        old: student_info[1],
        birth: student_info[2],
        state: student_info[3]
    }
    students << student
end
k = gets.chomp
students.each { |student| puts student[:name] if student[:old] == k }