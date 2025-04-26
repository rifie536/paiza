class Hero
    attr_accessor :level, :hp, :atk, :dfe, :spd, :clv, :fte
    
    def initialize(level, hp, atk, dfe, spd, clv, fte)
        @level = level
        @hp = hp
        @atk = atk
        @dfe = dfe
        @spd = spd
        @clv = clv
        @fte = fte
    end
    
    def levelup(hp_param, atk_param, dfe_param, spd_param, clv_param, fte_param)
        @level += 1
        @hp += hp_param
        @atk += atk_param
        @dfe += dfe_param
        @spd += spd_param
        @clv += clv_param
        @fte += fte_param
    end
    
    def muscle_training(hp_param, atk_param)
        @hp += hp_param
        @atk += atk_param
    end
    
    def running(dfe_param, spd_param)
        @dfe += dfe_param
        @spd += spd_param
    end
    
    def study(clv_param)
        @clv += clv_param
    end
    
    def pray(fte_param)
        @fte += fte_param
    end
    
    def status
        [@level, @hp, @atk, @dfe, @spd, @clv, @fte]
    end
end

heros = []
n, k = gets.split.map(&:to_i)

n.times do
    params = gets.split.map(&:to_i)
    heros << Hero.new(*params)
end

k.times do
    hero_idx, event, *params = gets.split
    hero_idx = hero_idx.to_i - 1
    params = params.map(&:to_i)
    heros[hero_idx].send(event, *params)
end

heros.each { |hero| puts hero.status.join(' ') }