define(['null'],
function(nil) {

  describe('null', function() {
    it('should be null', function() {
      expect(nil).to.be.equal(null);
    });
  });
  
  return { name: "test.null" }
});
