class Player
    attr_accessor :hp, :skills
    
    def initialize(hp, frame1, atk1, frame2, atk2, frame3, atk3)
        @hp = hp
        skill1 = {frame: frame1, atk: atk1}
        skill2 = {frame: frame2, atk: atk2}
        skill3 = {frame: frame3, atk: atk3}
        @skills = [skill1, skill2, skill3]
    end
    
    def alive?
        @hp > 0
    end
    
    def use_buff
        @skills.each do |skill|
            if skill[:frame] > 0 
                skill[:frame] = [skill[:frame] - 3, 1].max
                skill[:atk] += 5
            end
        end
    end
    
    def take_damage(amount)
        @hp = [@hp - amount, 0].max
    end
end

class Battle
    attr_accessor :player1, :player2
    
    def initialize(player1, player2)
        @player1 = player1
        @player2 = player2
    end
    
    def result(player1_skill, player2_skill)
        return unless @player1.alive? && @player2.alive?
        
        if player1_skill[:frame] == 0 && player1_skill[:atk] == 0
            @player1.use_buff
            if player2_skill[:frame] > 0
                @player1.take_damage(player2_skill[:atk])
            end
            return
        end
        
        if player2_skill[:frame] == 0 && player2_skill[:atk] == 0
            @player2.use_buff
            if player1_skill[:frame] > 0
                @player2.take_damage(player1_skill[:atk])
            end
            return
        end
        
        if player1_skill[:frame] > 0 && player2_skill[:frame] > 0
            if player1_skill[:frame] < player2_skill[:frame]
                @player2.take_damage(player1_skill[:atk])
            elsif player1_skill[:frame] > player2_skill[:frame]
                @player1.take_damage(player2_skill[:atk])
            end
        end
    end
end

n, k = gets.split.map(&:to_i)
players = []
n.times do
    params = gets.split.map(&:to_i)
    players << Player.new(*params)
end

k.times do
    p1, t1, p2, t2 = gets.split.map(&:to_i)
    battle = Battle.new(players[p1 - 1], players[p2 - 1])
    battle.result(players[p1 - 1].skills[t1 - 1], players[p2 - 1].skills[t2 - 1])
end

alive_count = players.count(&:alive?)
puts alive_count