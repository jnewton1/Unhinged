require './lib/level.rb'
module Game 
    castle = Level.new("A scary castle")
    village = Level.new("A scary village")
    forest = Level.new("a gloomy forest")
    desert = Level.new("A scary desert")
    artic = Level.new("A frozen wasteland")
    

    castle.direction ={:north => village}
    village.direction ={:south => castle, :east => desert, :west => forest}
    desert.direction ={:north => artic, :west => village}
    forest.direction ={:east => village}
    artic.direction ={:south => desert}

end
