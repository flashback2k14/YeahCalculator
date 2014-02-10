/*
* BEGINN firing on window load - register actionlistener
*/
window.onload = function() {
  /*
  *******************************************************************
  * BEGINN Variable declaration
  *******************************************************************
  */
  //number variable
  var num1, num2, sol;
  //number arrays
  var arrNum1 = new Array();
  var arrNum2 = new Array();
  //calc operator
  var operator;
  //temp operator for prozent
  var tmpOperator;
  //tmp result for next calcoperation
  var tmpResult;
  //bool isDirty for setNum1 or setNum2
  var isDirty = false;
  //bool isSolved for only one operation
  //temp solution
  var isSolved = false;
  //output
  var output;
  /*
  *******************************************************************
  * ENDE Variable declaration
  *******************************************************************
  */
  /*
  *******************************************************************
  * BEGINN function for setting input numbers to output
  *******************************************************************
  */
  //function for setting numbers to output
  function setNum (value) {
   if (!isSolved) {
     var n = value;
      switch (n) {
        case 1:
          setOutput(n);
          //if dirty then setNum2Array else setNum1Array
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 2:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 3:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 4:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 5:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 6:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;  
        case 7:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 8:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;  
        case 9:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        case 0:
          setOutput(n);
          if (!isDirty) {
            setNum1Array(n);
          } else {
            setNum2Array(n);
          }
          break;
        default:
          setOutput("NaN");
      }
    }
  }
   
  //function for tmp save number 1 input
  function setNum1Array (value) {
    var tmpNum1 = value;
    if (arrNum1.length === 0) {
      arrNum1[0] = tmpNum1;
    } else {
      arrNum1.push(tmpNum1);
    }
  }
  
  //function for tmp save number 2 input
  function setNum2Array (value) {
    var tmpNum2 = value;
    if (arrNum2.length === 0) {
      arrNum2[0] = tmpNum2;
    } else {
      arrNum2.push(tmpNum2);
    }
  }
  
  //function for setting comma to output
  function addComma() {
    if (!isDirty) {
       setNum1Array('.');
    } else {
       setNum2Array('.');
    }
    setOutput(',');
  }
  /*
  *******************************************************************
  * ENDE function for setting input numbers to output
  *******************************************************************
  */
  /*
  *******************************************************************
  * BEGINN function for setting calculation operators to output
  *******************************************************************
  */
  //function for setting operators to output
  function calcOperation (value) {
    if (!isSolved) {
      var co = value;
      switch (co) {
        case '+':
          setOutput('&#10;');
          setOutput(co);
          setOutput('\t');
          operator = '+';
          tmpOperator = operator;
          isDirty = true;
          break;
        case '-':
          setOutput('&#10;');
          setOutput(co);
          setOutput('\t');
          operator = '-';
          tmpOperator = operator;
          isDirty = true;
          break;
        case '*':
          setOutput('&#10;');
          setOutput(co);
          setOutput('\t');
          operator = '*';
          tmpOperator = operator;
          isDirty = true;
          break;
        case '/':
          setOutput('&#10;');
          setOutput(co);
          setOutput('\t');
          operator = '/';
          tmpOperator = operator;
          isDirty = true;
          break;
        case 'w':
          setOutput('&#10;');
          setOutput('&radic;');
          setOutput('\t');
          operator = 'w';
          isDirty = true;
          break;
        case 'p2':
          setOutput('&#10;');
          setOutput('^ &sup2;');
          setOutput('\t');
          operator = 'p2';
          isDirty = true;
          break;
        case 'pn':
          setOutput('&#10;');
          setOutput('^ \t');
          operator = 'pn';
          isDirty = true;
          break;
        case 'pr':
          setOutput(' %');
          operator = 'pr';
          isDirty = true;
          break;
        default:
          setOutput("Bad Operation Input");
          isDirty = false;
      }
    }
  }
  /*
  *******************************************************************
  * ENDE function for setting calculation operators to output
  *******************************************************************
  */
  /*
  *******************************************************************
  * BEGINN function for calculation and output the result
  *******************************************************************
  */
  //function for solve Operation
  function solveOperation () {
    num1 = parseFloat(arrNum1.join(''));
    num2 = parseFloat(arrNum2.join(''));
    op = operator;
    
    switch (op) {
      case '+':
        sol = add(num1, num2);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case '-':
        sol = sub(num1, num2);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case '*':
        sol = mul(num1, num2);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case '/':
        sol = divi(num1, num2);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case 'w':
        sol = wurzel(num1);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case 'p2':
        sol = potenz2(num1);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case 'pn':
        sol = potenzN(num1,num2);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      case 'pr':
        sol = prozent(num1,num2,tmpOperator);
        setOutputEqual();
        setOutput(sol);
        isSolved = true;
        break;
      default:
        setOutput('no valid operation');    
    }
  }
  /*
  *******************************************************************
  * ENDE function for calculation and output the result
  *******************************************************************
  */
  /*
  *******************************************************************
  * BEGINN function for clear, output, open help page, isEmpty
  *******************************************************************
  */
  //clear all
  function clearOutput () {
    num1 = null;
    num2 = null;
    tmpResult = sol;
    sol = null;
    arrNum1 = [];
    arrNum2 = [];
    operator = null;
    tmpOperator = null;
    isDirty = false;
    isSolved = false;
    output = null;
    document.getElementById("output").innerHTML = "";
  }
  
  //show equal-sign
  function setOutputEqual() {
    setOutput('&#10;');
    setOutput('------------');
    setOutput('&#10;');
    setOutput('= \t');
  }
  
  //show input and output
  function setOutput (value) {
    document.getElementById("output").innerHTML += value;
  }
   
  //function opening helpPage
  function openHelpPage() {
    chrome.app.window.create('../html/help.html', {
    "id": 'helpPage',
    "bounds": {
      "left": 270,
      "top": 157,
      "width": 240,
      "height": 380
      }
    });
  }
  
  //function for empty input check
  function isEmpty(input) {
    if ( null === input || "" === input ) { 
      return true; 
    } 
    return false; 
  }
  /*
  *******************************************************************
  * ENDE function for clear, output, open help page, isEmpty
  *******************************************************************
  */
  /*
  *******************************************************************
  * RECHENOPERATIONEN
  *******************************************************************
  */
  /*
  * BEGINN GRUNDOPERATIONEN
  */
  function add(num1, num2) {
    if (!isEmpty(num1) && !isEmpty(num2)) {
      return num1 + num2;
    } 
    return null;
  }
  
  function sub(num1, num2) {
    if (!isEmpty(num1) && !isEmpty(num2)) {
      return num1 - num2;
    } 
    return null;
  }
  
  function mul(num1, num2) {
    if (!isEmpty(num1) && !isEmpty(num2)) {
      return num1 * num2;
    } 
    return null;
  }
  
  function divi(num1, num2) {
    if (!isEmpty(num1) && !isEmpty(num2)) {
      if (num2 === 0) {
        return null;
      } else {
        return num1 / num2;
      }
    } 
    return null;
  }
  /*
  * ENDE GRUNDOPERATIONEN
  */
  /*
  * BEGINN ANDERE OPERATIONEN 
  */
  function wurzel(num1) {
    if(!isEmpty(num1)) {
      if (num1 === 0) {
        return null;
      } else {
        return Math.sqrt(num1);
      }
    }
    return null;
  }
  
  function potenz2(num1) {
    if(!isEmpty(num1)) {
      return num1 * num1;
    }
    return null;
  }
  
  function potenzN(basis,exp) {
    if(!isEmpty(basis) && !isEmpty(exp)) {
      return Math.pow(basis,exp);
    }
    return null;
  }
  
  function prozent(num1,num2,op) {
    var result = 0;
    
    if(!isEmpty(num1) && !isEmpty(num2) && !isEmpty(op)) {
      switch (op) {
        case '+':
          result = num1 + (num2 * 100 / 100);
          break;
        case '-':
          result = num1 - (num2 * 100 / 100);
          break;
        //Beginn Prüfung Richtigkeit
        case '*':
          //result = num2 * 100 / num1;
          result = num1 * (num2 * 100 / 100);
          break;
        case '/':
          //result = num1 * (num2 * 100 / 100);
          result = num2 * 100 / num1;
          break;
        //Ende Prüfung Richtigkeit
        default:
          setOutput('something went wrong');
      }
      return result;
    }
    return null;
  }
  /*
  * ENDE ANDERE OPERATIONEN
  */
  /*
  *******************************************************************
  * EVENTLISTENER
  *******************************************************************
  */
  /*
  * BEGINN KEYBOARDLISTENER
  */
  window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   
   //setOutput(key);
   
   switch (key) {
      case 48:
        setNum(0);
        break;
      case 49:
        setNum(1);
        break;
      case 50:
        setNum(2);
        break;
      case 51:
        setNum(3);
        break;
      case 52:
        setNum(4);
        break;
      case 53:
        setNum(5);
        break;
      case 54:
        setNum(6);
        break;
      case 55:
        setNum(7);
        break;
      case 56:
        setNum(8);
        break;
      case 57:
        setNum(9);
        break;
      case 187:
      case 65:
        calcOperation('+');
        break;
      case 189:
      case 83:  
        calcOperation('-');
        break;
      //not working
      case 42:
        setOutput('temp not working');
        break;
      case 77:
        calcOperation('*');
        break;
      case 191:
      case 68:  
        calcOperation('/');
        break;
      case 87:
        calcOperation('w');
        break;
      case 69:
        calcOperation('p2');
        break;
      case 70:
        calcOperation('pn');
        break;
      case 80:
        calcOperation('pr');
        break;
      case 188:
        addComma();
        break;
      case 67:
        clearOutput();
        break;
      case 90:
        if(!isSolved){
          solveOperation();
        } else {
          setOutput('&#10; temp only one operation at the same time.');
        }
        break;
      case 72: 
        openHelpPage();
        break;
      default:
        break;
    }
  }
  /*
  * ENDE KEYBOARDLISTENER
  */
  /*
  * BEGINN BUTTONLISTENER
  */
  //eventListener numbers
  document.getElementById("num0").addEventListener("click", function() {setNum(0)}, true);
  document.getElementById("num1").addEventListener("click", function() {setNum(1)}, true);
  document.getElementById("num2").addEventListener("click", function() {setNum(2)}, true);
  document.getElementById("num3").addEventListener("click", function() {setNum(3)}, true);
  document.getElementById("num4").addEventListener("click", function() {setNum(4)}, true);
  document.getElementById("num5").addEventListener("click", function() {setNum(5)}, true);
  document.getElementById("num6").addEventListener("click", function() {setNum(6)}, true);
  document.getElementById("num7").addEventListener("click", function() {setNum(7)}, true);
  document.getElementById("num8").addEventListener("click", function() {setNum(8)}, true);
  document.getElementById("num9").addEventListener("click", function() {setNum(9)}, true);
  //eventListener operators
  document.getElementById("kom").addEventListener("click", function() {addComma()}, true);
  document.getElementById("add").addEventListener("click", function() {calcOperation('+')}, true);
  document.getElementById("sub").addEventListener("click", function() {calcOperation('-')}, true);
  document.getElementById("mul").addEventListener("click", function() {calcOperation('*')}, true);
  document.getElementById("divi").addEventListener("click", function() {calcOperation('/')}, true);
  document.getElementById("wurzel").addEventListener("click", function() {calcOperation('w')}, true);
  document.getElementById("x2").addEventListener("click", function() {calcOperation('p2')}, true);
  document.getElementById("xn").addEventListener("click", function() {calcOperation('pn')}, true);
  document.getElementById("proz").addEventListener("click", function() {calcOperation('pr')}, true);
  document.getElementById("solve").addEventListener("click", function() {solveOperation()}, true);
  document.getElementById("clear").addEventListener("click", function() {clearOutput()}, true);
  //eventListner for opening new Window
  document.getElementById("helpPage").addEventListener("click", function() {openHelpPage()}, true);
  /*
  * ENDE BUTTONLISTENER
  */
}
/*
* ENDE firing on window load - register actionlistener
*/