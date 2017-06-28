describe("GitHub issue #120", function() {
  it("Failing difference", function() {
    
    var reader = new jsts.io.WKTReader(); 
    var a = reader.read('POLYGON((623683.747682352 6856506.175968231,623704.7603494342 6856382.931002101,623615.119216278 6856374.755765921,623607.3068144141 6856434.746533728,623602.7048666647 6856485.202268732,623590.8382089462 6856561.659395823,623584.7111841728 6856607.572985706,623584.9494078832 6856614.934552064,623588.1954842347 6856617.305258272,623596.8327635253 6856617.279766804,623613.4538766957 6856614.848973587,623641.0889402851 6856612.385406383,623647.3473220575 6856611.067134219,623662.4578297378 6856609.075159838,623665.2619677109 6856607.767813121,623667.4115470782 6856604.730690918,623669.9596502223 6856589.783623562,623676.7345544321 6856544.299844442,623683.747682352 6856506.175968231))');
    var b = reader.read('POLYGON((623609.0919100747 6856421.0389363505,623609.0919100747 6856421.038936355,623609.0919100747 6856421.03893636,623609.0919100756 6856421.03893636,623609.0919100766 6856421.03893636,623609.0919100787 6856421.03893636,623609.0919100796 6856421.03893636,623609.0919100813 6856421.0389363635,623639.4659646702 6856430.175847102,623640.8794178372 6856456.748766594,623640.8794178382 6856456.748766597,623640.879417839 6856456.748766597,623640.8794178399 6856456.748766597,623640.8794178419 6856456.748766597,623640.8794178438 6856456.748766603,623640.8794178457 6856456.748766603,623640.8794178476 6856456.748766603,623640.8794178496 6856456.748766603,623640.8794178515 6856456.748766603,623640.8794178534 6856456.748766597,623640.8794178544 6856456.748766597,623703.8370116209 6856388.3466276815,623703.8370116217 6856388.346627679,623703.8370116226 6856388.346627679,623703.8370116226 6856388.346627673,623704.7603494327 6856382.93100211,623704.7603494318 6856382.931002106,623704.7603494308 6856382.931002101,623704.760349429 6856382.931002101,623704.760349427 6856382.931002101,623704.7603494251 6856382.931002101,623704.7603494232 6856382.931002101,623615.1192162875 6856374.755765921,623615.1192162854 6856374.755765921,623615.1192162836 6856374.755765921,623615.1192162817 6856374.755765925,623615.1192162808 6856374.755765925,623615.1192162788 6856374.755765925,623615.1192162778 6856374.755765925,623615.1192162769 6856374.75576593,623609.0919100747 6856421.0389363505))');
    a.difference(b);

    //var writer = new jsts.io.WKTWriter();   
    //expect(writer.write(combinedPoints)).toBe("MULTIPOINT((10 10),(15 15))");
  }); 
});
