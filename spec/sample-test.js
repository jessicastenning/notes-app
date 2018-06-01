assert.toBeTrue(true);
assert.toBeTrue(false);

assert.toBeFalse(false);
assert.toBeFalse(true);

assert.toEq("hi", "hi");
assert.toEq("hi", "hey");

assert.toEq(1, 1);
assert.toEq(1, 2);

assert.toEq([1, 2, 3], [1, 2, 3])
assert.toEq([1, 2, 3], [1, 3, 2])

assert.toEq({name: "jess"}, {name: "jess"})
assert.toEq({name: "jess"}, {name: "ellie"})

assert.toInclude("hi jess", "jess");
assert.toInclude("hi jess", "ellie");

assert.toInclude([1, 2, 3], 3)
assert.toInclude([1, 2, 3], 4)
