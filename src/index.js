var createIncrementer = function(){
    var count = 0;
    
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        },
        reset: function(){
            count = 0;
        }
    };
};
