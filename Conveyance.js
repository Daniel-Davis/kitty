// Daniel Davis
// Project: conveyance heirarchy hw due: 9/2/15
// Purpose: to demenstrate my knowledge of prototype inheritance

var createObject, extendObject,
  makeNoise, makeTransport,
  carPrototype, planePrototype, makeCar, makePlane, nissanCar, jetPlane;

// THIS PART OF CODE IS FROM KITTY.js //
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively

var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};
// END OF CODE FROM KITTY.js//

//  object method
makeNoise = function () {
  print( this.make_noise + ' says ' + this.sound );
  };

// makeTransport constructor
makeTransport = function ( arg_map ) {
  var transport = {
    carrying_capacity : 0;
    made_of_metal : true;
    make_noise : makeNoise,
    };
  extendObject( transport, arg_map );
  return transport;
  };

// use transport constructor to create a car prototype and a plane prototype
carPrototype = makeTransport({
  has_four_wheels : true,
  make_noise : 'vroom'
});

planePrototype = makeTransport({
  has_wings : true,
  defies_gravity : true,
  make_noise : 'swovroom'
});

// car constructor and plane constructor
makeCar = function( arg_map ) {
  var car = Object.create( carPrototype );
  extendObject( car, arg_map );
  return car;
};
  
makePlane = function( arg_map ) {
  var plane = Object.create( planePrototype );
  extendObject( plane, arg_map );
  return plane;
};

// car instance
nissanCar = makeCar({
  four_door : true,
  noise : 'beep beep im a car',
  weight_lbs : 2000
});

// plane instance
jetPlane = makePlane({
  has_guns : true,
  nosie : 'ratta tat tat mofo',
  weight_lbs : 970000
});

// car instance method invocations
nissanCar.makeNoise();
jetPlane.makeNoise();
