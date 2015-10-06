# define class Player
class Player  
    
    NAME = "Helen"  #name is constant, initiated as Helen          
  def initialize(damage)  
    # Instance variables  
    @damage = damage
    @health = 2  
    @defaultWeapon = "Shield"
  end  
  
  def bark  
    puts "My name is #{NAME} bi*^%"
  end  
  
  def display  
    puts "Name: #{NAME}, Damage: #{@damage}, Health: #{@health}, Weapon: #{@defaultWeapon}"  
  end  
end  
  
# make an object  
p = Player.new(100)  
  

p.bark  

p.display  



