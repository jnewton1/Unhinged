class Enemy
    
=begin
Private String name;
·         Private String weapon;
·         Private Int damage;
·         Private Int health = (ranges from 1-5);
·         String message;
=end
    def initialize(damage, weapon, message)
         # Instance variables  
    @damage = damage
    @health = Random.rand(1...5)
    @Weapon = weapon
    @message = message
    end
    
    def display
        puts "Enemy name: Adolf, Damage: #{@damage}, Health: #{@health}, Weapon: #{@weapon}, Message: #{@message}"
    end
    e = Enemy.new(98, "Sword", "If it's not the maggot")
    
    e.display
end