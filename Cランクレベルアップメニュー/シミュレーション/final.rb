h = gets.to_i
paiza_attack = []
monster_attack = []
count = 0
while true
    count += 1
    if count <= 2
        paiza_attack << 1
        monster_attack << 1
    else
        paiza_attack << monster_attack[count - 2] + monster_attack[count - 3]
        monster_attack << paiza_attack[count - 2] * 2 + paiza_attack[count - 3]
    end

    return puts count if h - monster_attack.sum <= 0
end