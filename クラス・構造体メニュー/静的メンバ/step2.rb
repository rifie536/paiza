class Employee
    def initialize(number, name)
        @number = number
        @name = name
    end
    
    def getnumber()
        @number
    end
    
    def getname()
        @name
    end
end

n = gets.to_i
employees = []

n.times do
    s = gets.chomp.split

    case s[0]
    when "make"
        employee = Employee.new(s[1].to_i, s[2])
        employees << employee
    when "getnum"
        puts employees[s[1].to_i - 1].getnumber
    when "getname"
        puts employees[s[1].to_i - 1].getname
    end
end