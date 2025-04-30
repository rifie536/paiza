class Robot
    attr_accessor :students

    def initialize
        @students = {}
    end

    def join(num, id)
        @students[num.to_i] = id
    end

    def leave(num)
        @students.delete(num.to_i)
    end

    def call(num)
        puts @students[num.to_i]
    end
end

robot = Robot.new
n, k = gets.split.map(&:to_i)

n.times do
    num, id = gets.split
    robot.join(num, id)
end

k.times do
    event, *params = gets.split
    robot.send(event, *params)
end