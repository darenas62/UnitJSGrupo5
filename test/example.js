// Definir variables
var obj = {
  message: 'hola'
, name: 'Nico'
}
, str = 'hello WORLD'
, num = 75
, req = {
  headers: {
    'content-type': 'application/json'
  }
}
, test = require('unit.js')
;
function problema(ramificacion){
  if(ramificacion == "hola"){
    return 'eran numeros po oe';
  }
  if(ramificacion == null){
    return 'nulo';
  }
  if(ramificacion == "indefinido"){
    return 'indefinido';
  }
  switch(ramificacion){
    case 1:
      return 1;
    case 6:
      return 6;
    case 13:
      return 'mas me crece';
    case 99:
      return 99;
    case 375:
      return 'calculadora';
    case 596:
      return 'multiplo';
    case 3:
      return 3;
    case 5:
      return 5;
    case 7:
      return 7;
    case 69:
      return 1313;
    case 33:
      return 'salfate';
  }
}
// Realizar pruebas
describe('tarea edmoza', function() {
  it('el compare no es na longi y pone numeros', function() {
    test
      .string(problema("hola"))
      .is('eran numeros po oe'); // Test 1
  });

  it('tampoco ingresa nulo', function() {
    test
      .string(problema(null))
      .is('nulo');
  });

  it('ni indefinido', function() {
    test
      .string(problema("indefinido"))
      .is('indefinido');
  });

  it('ingresa el 1 entero de bien', function() {
    test
      .number(problema(1))
      .is(1); // Test 3
  });

  it('ingresa el 6 el compare', function() {
    test
      .number(problema(6))
      .is(6);
  });

  it('cuando es 13', function() {
    test
      .string(problema(13))
      .is('mas me crece'); // Test 5
  });

  it('noventa y nueve hmno', function() {
    test
      .number(problema(99))
      .is(99);
  });

  it('375 y que paza', function() {
    test
      .string(problema(375))
      .is('calculadora');
  });

  it('596 pa los vios', function() {
    test
      .string(problema(596))
      .is('multiplo');
  });
  it('de aqui pa delante hay 3 fomes ', function() {
    test
      .number(problema(3))
      .is(3);
  });
  it('el 5 es la 2da', function() {
    test
      .number(problema(5))
      .is(5);
  });
  it('y el 7 la 3era', function() {
    test
      .value(req)
      .hasHeaderJson(); // The same test 7
  });
  it('69', function() {
    test
      .number(problema(69))
      .is(1313);
  });
  it('33', function() {
    test
      .string(problema(33))
      .is('salfate');
  });
});
