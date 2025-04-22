class Employee
    attr_accessor :number, :name

    def initialize(number, name)
        @number = number
        @name = name
    end

    def getnum
        @number
    end

    def getname
        @name
    end
end

n = gets.to_i
employees = []

n.times do
    s = gets.chomp.split

    case s[0]
    when "make"
        employees << Employee.new(s[1].to_i, s[2])
    when "getnum"
        puts employees[s[1].to_i - 1].getnum
    when "getname"
        puts employees[s[1].to_i - 1].getname
    when "change_num"
        employees[s[1].to_i - 1].number = s[2].to_i
    when "change_name"
        employees[s[1].to_i - 1].name = s[2]
    end
end