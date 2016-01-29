describe("Pizza", function() {
  var myPizza = new Pizza("small");
  var sampleTopping = new Topping("huckleberry", 2.5)
  var sampleToppingTwo = new Topping("salmon", 3)

  it("creates a new pizza of your choice called myPizza with desired diameter and toppings", function() {
    expect(myPizza.diameter).to.equal("small");
  });

  it("creates a new topping constructor with desired toppings", function() {
    expect(sampleTopping.toppingName).to.equal("huckleberry");
    expect(sampleTopping.price).to.equal(2.50);
  });

  it("creates a prototype method for the cost of a pizza depending on selections", function() {
    expect(myPizza.sizePrice()).to.equal(5);
  });

  it("adds one topping", function() {
    expect(myPizza.addTopping(sampleTopping)).to.equal(7.5);
  });

  it("removes one topping", function() {
    expect(myPizza.removeTopping(sampleToppingTwo)).to.equal(4.5);
  });

});
