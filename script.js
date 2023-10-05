const btn = document.getElementById('my-button')
const result = document.getElementById('paragraph')

const linguagues = [
    'Javascript', 
    'PHP', 
    'Python', 
    'Java', 
    'C', 
    'C++', 
    'Delphi', 
    'C#', 
    'Cobol',
    'Ruby',
    'Dart', 
    'Typescript', 
    'GO', 
    'Perl', 
    'Ruby', 
    'Kotlin', 
    'MATLAB', 
    'Groovy', 
    'Haskell', 
    'Scala',
    'Brainfuck' , 
    'Whitespace' , 
    'Malbolge' , 
    'INTERCAL' , 
    'Befunge' , 
    'Piet', 
    'Ook!' , 
    'ArnoldC',
    'Lua',
    'Assembly',
    'PowerShell',
    'SQL',
    'Fortran',
    'Clojure'
]


btn.addEventListener('click', function(){
    const randomIndex = Math.floor(Math.random() * linguagues.length)
    result.innerText  = linguagues[randomIndex];

})