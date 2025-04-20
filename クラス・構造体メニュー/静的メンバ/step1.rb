class Employee
    def initialize(number, name)
      @number = number
      @name = name
    end

    def getnum
      return @number
    end

    def getname
      return @name
    end
  end

  n = gets.chomp.to_i

  employees = []

  n.times do
    s = gets.chomp.split

    case s[0]
    when "make"
      number = s[1].to_i
      name = s[2]
      employees.push(Employee.new(number, name))
    when "getnum"
      index = s[1].to_i - 1
      puts employees[index].getnum
    when "getname"
      index = s[1].to_i - 1
      puts employees[index].getname
    end
  end