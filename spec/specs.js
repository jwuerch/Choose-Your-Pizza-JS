describe("Pizza", function() {
  var myPizza = new Pizza(10, ["pineapple", "pepperoni", "bacon"])
  it("creates a new pizza of your choice called myPizza with desired diameter and toppings", function() {
    expect(myPizza.diameter).to.equal(10);
    expect(myPizza.toppings).to.eql(["pineapple", "pepperoni", "bacon"])
  });
});
