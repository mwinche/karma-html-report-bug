describe('incrementer', function(){
    it('should have an increment method', function(){
        var incrementer = createIncrementer();
        
        expect(incrementer.getCount()).toBe(0);
        
        incrementer.increment();
        
        expect(incrementer.getCount()).toBe(1);
    });
    
    //Intentionally leave off coverage for reset method
});
