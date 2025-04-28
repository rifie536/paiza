class Super_car
    attr_accessor :fuel_amount, :fuel_efficiency, :driving_distance

    def initialize(fuel_amount, fuel_efficiency)
        @fuel_amount = fuel_amount
        @fuel_efficiency = fuel_efficiency
        @driving_distance = 0
    end

    def run
        if @fuel_amount > 0
            @driving_distance += @fuel_efficiency
            @fuel_amount -= 1
        end
    end
end

class Super_super_car < Super_car
    def fly
        if @fuel_amount >= 5
            @driving_distance += @fuel_efficiency ** 2
            @fuel_amount -= 5
        else
            run
        end
    end
end

class Super_super_super_car < Super_super_car
    def fly
        if @fuel_amount >= 5
            @driving_distance += 2 * @fuel_efficiency ** 2
            @fuel_amount -= 5
        else
            run
        end
    end
    
    def teleport
        if @fuel_amount >= @fuel_efficiency ** 2
            @driving_distance += @fuel_efficiency ** 4
            @fuel_amount -= @fuel_efficiency ** 2
        else
            fly
        end
    end
end

n, k = gets.split.map(&:to_i)

cars = []
n.times do
    car_type, fuel_amount, fuel_efficiency = gets.split
    case car_type
    when "supercar"
        cars << Super_car.new(fuel_amount.to_i, fuel_efficiency.to_i)
    when "supersupercar"
        cars << Super_super_car.new(fuel_amount.to_i, fuel_efficiency.to_i)
    when "supersupersupercar"
        cars << Super_super_super_car.new(fuel_amount.to_i, fuel_efficiency.to_i)
    end
end

k.times do
    num, car_func = gets.split
    index = num.to_i - 1
    cars[index].send(car_func)
end

cars.each { |car| puts car.driving_distance }