(function(root){
const A=typeof module!=='undefined'?require('./algorithms.js'):root.StosONP;
function runTests(){const cases=[];const add=(name,input,expected,fn)=>{let actual,status;try{actual=fn();status=JSON.stringify(actual)===JSON.stringify(expected)?'PASS':'FAIL';}catch(e){actual=e.message;status='FAIL';}cases.push({name,input,expected,actual,status});};const err=f=>{try{f();return false;}catch(e){return true;}};
add('Stos LIFO, peek, pusty','push 2; push 7; peek; pop; pop',[7,7,2,true],()=>{let s=new A.Stack();s.push(2);s.push(7);return [s.peek(),s.pop(),s.pop(),s.isEmpty()];});
add('Ochrona pustego stosu','pop; peek',[true,true],()=>{let s=new A.Stack();return [err(()=>s.pop()),err(()=>s.peek())];});
add('Konflikt nawiasów','([)]',2,()=>A.brackets('([)]').pos);
add('Pozostałe otwarcia','a([',[1,2],()=>A.brackets('a([').remainingOpen.map(x=>x.pos));
add('Ignorowanie znaków','x{a[b(c)]}',true,()=>A.brackets('x{a[b(c)]}').ok);
add('Stan nawiasów','([)] po 2 otwarciach',['( @0','[ @1'],()=>A.brackets('([)]').steps[1].stack);
add('ONP kontrolne','3 + 4 * (2 − 1)','3 4 2 1 - * +',()=>A.convert('3 + 4 * (2 − 1)').output.join(' '));
add('Wynik kontrolny','3 + 4 * (2 − 1)',7,()=>A.calculate('3 + 4 * (2 − 1)').evaluation.result);
add('Drugi przykład','(3+4)*(2-1)',7,()=>A.calculate('(3+4)*(2-1)').evaluation.result);
add('Lewostronne dzielenie','8 / 2 / 2',2,()=>A.calculate('8 / 2 / 2').evaluation.result);
add('Jedna liczba','99',99,()=>A.calculate('99').evaluation.result);
add('Stan stosu operatorów','2+3*4 po odłożeniu *',['+','*'],()=>A.convert('2+3*4').steps.find(x=>x.line===6&&x.active==='*').stack);
add('Stan wartości','2 3 4 * + po *',[2,12],()=>A.evaluate('2 3 4 * +').steps.find(x=>x.line===3&&x.active==='*').stack);
add('Kolejność odejmowania','2 7 -',-5,()=>A.evaluate('2 7 -').result);
add('Ułamek','3/2',1.5,()=>A.calculate('3/2').evaluation.result);
for(const input of ['', '2++3','-2','2 3','2(3)','()','(2+3','2+3)','100','3.5','2^3',Array(31).fill('1').join('+')])add('Walidacja: '+(input||'puste'),input,true,()=>err(()=>A.calculate(input)));
for(const input of ['1 0 /','1 +','1 2','', 'a', '1 1 - 2 / 0 /'])add('Błędne ONP: '+input,input,true,()=>err(()=>A.evaluate(input)));
add('Dzielenie przez wynik zero','3/(2-2)',true,()=>err(()=>A.calculate('3/(2-2)')));
add('Priorytety','2+3*4',14,()=>A.calculate('2+3*4').evaluation.result);
add('Nawiasy zmieniają wynik','(2+3)*4',20,()=>A.calculate('(2+3)*4').evaluation.result);
return cases;}
root.runTests=runTests;if(typeof module!=='undefined'){module.exports=runTests;if(require.main===module){const fs=require('fs');const results=runTests();fs.writeFileSync(__dirname+'/test-results.json',JSON.stringify({date:new Date().toISOString(),runtime:process.version,results},null,2));console.log(JSON.stringify(results,null,2));console.log(results.filter(x=>x.status==='PASS').length+'/'+results.length+' PASS');process.exitCode=results.some(x=>x.status!=='PASS')?1:0;}}
})(typeof globalThis!=='undefined'?globalThis:this);