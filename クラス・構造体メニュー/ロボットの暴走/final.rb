class Robot
    attr_accessor :x, :y, :level

    def initialize(x, y, level)
        @x = x
        @y = y
        @level = level
    end

    def move(x, y)
        ability = 1 + (@level - 1) ** 2
        @x += ability * x
        @y += ability * y
    end

    def current_point
        [@x, @y]
    end

    def level_up
        @level += 1
    end
end

directions = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] }

h, w, n, k = gets.split.map(&:to_i)

tool_box_point = []
10.times do
    point = gets.split.map(&:to_i)
    tool_box_point << point
end

robots = []
n.times do
    info = gets.split.map(&:to_i)
    robots << Robot.new(*info)
end

k.times do
    num, direction = gets.split
    index = num.to_i - 1
    direction = direction.to_sym
    robots[index].move(*directions[direction])

    if tool_box_point.include?(robots[index].current_point)
        robots[index].level_up
    end
end

robots.each do |robot|
    puts [robot.current_point, robot.level].join(' ')
end