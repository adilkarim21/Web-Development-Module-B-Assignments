// Q1:

let a = 5;


// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
        //    ( "abc" ) * ( 5 ) || 0 * "end" 
        //             NaN

// console.log(exp1);


// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
                    // "falsetest"

// console.log(exp2);


// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
        //    23  &&  ( "3value" ) * ( 3 ) + "result"
        //    "Nanresult"

// console.log(exp3);


// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
        //    "hello" * ( 7 )  ||  ( 5 * "abc" ) * ( 1 ) + "xyz" && 0
                            //    0

// console.log(exp4);


// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
                        // true 

// console.log(exp5);


// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
        //    "6abc"  &&  11  ||  1  &&  NaN  ||  6
        //                11

// console.log(exp6);


// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
        //    NaN  ||  9  ||  "result"
                    // 9

// console.log(exp7);


// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
                        // 1

// console.log(exp8);


// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
        //    NaN  ||  ( "6test" )  &&  ( "3result" )  ||  null
                        //  "3result"

// console.log(exp9);


// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
            // ( 6 )  &&  "start"  ||  1  &&  "value"  ||  NaN  &&  6
                    //    "start"

// console.log(exp10);


// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
                    //  20  ||  NaN  &&  0
                        //  20

// console.log(exp11);


// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
            // NaN  ||  "result"  ||  "4test"
                    //  "result"

// console.log(exp12);


// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
            // 27  &&  "falsetest"  ||  NaN  &&  4
                    // "falsetest"

// console.log(exp13);


// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
            // NaN  ||  NaN  ||  "end"
                            //   "end"

// console.log(exp14);


// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
            // "NaNresult"  ||  NaN
            // "NaNresult"

// console.log(exp15);


// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
            // NaN  ||  false ||  "start30"  &&  null
                                            //   null

// console.log(exp16);


// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
                            //   4

// console.log(exp17);


// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
            // "start"  &&  NaN  ||  "18result"  &&  0
                                                //   0

// console.log(exp18);


// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
                        // "foo" 

// console.log(exp19);


// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
            // "6hello"  &&  "6result"  ||  "end5"  ||  0
                                       //   "end5"

// console.log(exp20);


// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
            // 35  &&  "testfalse"  ||  "21value"
                    // "testfalse"

// console.log(exp21);


// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
            // "foo4"  &&  NaN  ||  11  &&  "test"
                                        //  "test"   

// console.log(exp22);


// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
            //  false  ||  NaN  &&  "start"  ||  20  &&  "result"
                                                      // "result"

// console.log(exp23);


// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
            // NaN  ||  NaN  &&  "world1" ||  2
                                           // 2

// console.log(exp24);


// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
            //  35  &&  5  ||  "start1test"  &&  0
                    //  5

// console.log(exp25);


// let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
            // "hello"  &&  12  ||  NaN
                        //  12

// console.log(exp26);


// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
            // NaN  &&  false  ||  "start5"
                             //    "start5"

// console.log(exp27);


// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
            //  NaN  ||  NaN  ||  "world"
                             //   "world"

// console.log(exp28);


// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
            // "start2"  &&  "NaNresult"
                          // "NaNresult"

// console.log(exp29);


// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
            //  NaN  ||  5  &&  "falsevalueend"  ||  5
                             // "falsevalueend"

// console.log(exp30);


// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
            // "3end"  ||  NaN  &&  7  ||  "start1"
            // "3end"

// console.log(exp31);


// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
            //  3  ||  NaN  &&  "falsetest"
            //  3

// console.log(exp32);


// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
            // 5  &&  "end5"  ||  NaN  &&  5
                //    "end5"

// console.log(exp33);


// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
            // "hello20"  ||  3  ||  "start1"  ||  "truetest"
            // "hello20"

// console.log(exp34);


// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
            // "start"  &&  25  &&  "falseend"  ||  2
                                //  "falseend"

// console.log(exp35);


// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
            // "1value"  &&  8  ||  NaN  &&  4
                        //   8

// console.log(exp36);


// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
            // "hello"  &&  "2test"  ||  9  &&  "1value1"
                        //  "2test"

// console.log(exp37);


// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
            // 25  &&  NaN  ||  "2end"
                            //  "2end"

// console.log(exp38);


// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
            // "start"  &&  2  ||  NaN  &&  0
                        //  2   

// console.log(exp39);


// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
            //  NaN  ||  NaN
              //    NaN

// console.log(exp40);


// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
            // "start"  &&  NaN  ||  4  &&  "hello"
                                        //  "hello"

// console.log(exp41);


// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
            // NaN  ||  3  &&  NaN
                         //    NaN

// console.log(exp42);


// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
            //  false  ||  20  &&  "start5"
                                // "start5"

// console.log(exp43);


// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
            // 30  &&  "value1"  ||  "8test"
                    // "value1"

// console.log(exp44);


// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
            //  "1test"  &&  20  ||  "end2"
                        //   20

// console.log(exp45);


// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
            //  14  &&  "test"  ||  "3hello"  &&  5
                    //  "test"

// console.log(exp46);


// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
            // "0result"  &&  8  ||  NaN
                        //    8

// console.log(exp47);


// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
            //  NaN  &&  4  ||  NaN
            //  NaN

// console.log(exp48);


// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
            //  "6result"  &&  24  ||  "start2end"
                            // 24

// console.log(exp49);


// let exp50 = 32 && true - ++a && "" || "true";  // for a = 5
            // 32  &&  -5  &&  ""  ||  "true"
                                    // "true"

// console.log(exp50);


// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
            //  42  ||  NAN
            //  42

// console.log(exp51);


// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
            //  NaN  ||  NaN
                //   NaN

// console.log(exp52);


// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
            // NaN  ||  "startend"
                    //  "startend"

// console.log(exp53);


// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
            //  NaN  ||  NaN
                //   NaN

// console.log(exp54);


// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
            // "startNaN"  ||  NaN
           //  "startNaN"

// console.log(exp55);


// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
            // "24test"  ||  NaN
            // "24test"

// console.log(exp56);


// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
            //  NaN  ||  NaN  ||  "value"
                            //    "value"

// console.log(exp57);


// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
            //  NaN  ||  "2end3"
                    //   "2end3"

// console.log(exp58);


// let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
            // NaN  ||  2
                    //  2

// console.log(exp59);


// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
            //  NaN  ||  NaN
                //   NaN

// console.log(exp60);


// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
            // "36result"  ||  NaN
            // "36result"

// console.log(exp61);


// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
            // "startNaN"  ||  NaN
            // "startNaN"

// console.log(exp62);


// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
            //  NaN  ||  "valueNaN"
                    //   "valueNaN"

// console.log(exp63);


// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
            // NaN  ||  "startfalse"
                    //  "startfalse"

// console.log(exp64);


// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
            // "valueNaN"  ||  NaN
            // "valueNaN"

// console.log(exp65);


// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
            //  NaN  ||  "NaNresult"
                    //   "NaNresult"

// console.log(exp66);


// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
            // "startNaN"  ||  NaN
            // "startNaN"

// console.log(exp67);


// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
            // "12result"  ||  3
            // "12result"

// console.log(exp68);


// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
            // NaN  ||  NaN
                //  NaN

// console.log(exp69);


// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
            //  NaN  ||  3
                     //  3

// console.log(exp70);


// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
            // "test16"  ||  4
            // "test16"

// console.log(exp71);


// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
            // NaN  ||  NaN
                //  NaN

// console.log(exp72);


// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
            //  NaN  ||  "NaNstart"
                    //   "NaNstart"

// console.log(exp73);


// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
            //  NaN  ||  "NaNstart"
                    //   "NaNstart"

// console.log(exp74);


// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
            //  "NaN5start"  ||  NaN
            //  "NaN5start"

// console.log(exp75);



// ------------------------------------ THE END ---------------------------------------- //