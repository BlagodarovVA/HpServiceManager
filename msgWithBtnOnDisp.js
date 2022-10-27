//вывод сообщения на экран с кнопкой из JS
var rteReturnValue = new SCDatum();
var argNames = new SCDatum();
var argVals = new SCDatum();
argVals.setType( 2 );
argNames.setType( 2 );
argNames.push( "text" );
argVals.push( "Welcome "+vars.$lo_ufname+". Hello World" );
rc = system.functions.rtecall( "callrad", rteReturnValue, "mb.ok", argNames, argVals, true );