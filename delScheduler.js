//триггер находит и удаляеи планировщик по условию (оптимизировано)
var pattern=/Update C...... Affected Services/;
var rez = record.name.match(pattern);
print('rez= '+rez);

if (rez) {
    var dSchedule = record.doAction("delete");
    print('complete');
}
print('done');