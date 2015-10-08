class Level
    attr_accessor :description
    attr_accessor :direction 
    
    def initialize(description, direction={})
        @description = description
         @direction = direction
    end
end
 