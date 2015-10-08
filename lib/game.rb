module Game
    castle = Level.new("A scary castle")
    village = Level.new("A scary village")
    desert = Level.new("A scary desert")
    artic = Level.new("A frozen wasteland")

    castle.direction ({:north => village})
    village.direction({:south => castle, :west => desert})
    desert.direction()
end
