// fill in javascript code here
let form = document.querySelector('form');
let name = document.getElementById('name');
let doctorId = document.getElementById('docID');
let department = document.getElementById('dept');
let experience = document.getElementById('exp');
let email = document.getElementById('email');
let mobile = document.getElementById('mbl');
let tbody = document.querySelector('tbody'); 
AllData = [];
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    let array = {};
    array.name = name.value;
    array.doctorId = doctorId.value;
    array.department = department.value;
    array.experience = experience.value;
    array.email  =  email.value;
    array.mobile = mobile.value;
    AllData.push(array);
    tbody.innerHTML = null;
    AllData.map((ele)=>
    {
        let row = document.createElement('tr');
        let inp1 = document.createElement('td');
        let inp2 = document.createElement('td');
        let inp3 =  document.createElement('td');
        let inp4 = document.createElement('td');
        let inp5 = document.createElement('td');
        let inp6 = document.createElement('td');
        let inp7 = document.createElement('td');
        let inp8 = document.createElement('button');
        
        inp1.innerHTML = ele.name
        inp2.innerHTML = ele.doctorId;
        inp3.innerHTML = ele.department;
        inp4.innerHTML = ele.experience;
        inp5.innerHTML = ele.email;
        inp6.innerHTML = ele.mobile;
        inp7.innerHTML = ele.experience;
        if(inp4.innerHTML > '5'){
            inp7.innerHTML = 'Senior';
        }
        else if(('2'<=inp4.innerHTML)&&(inp4.innerHTML<='5')){
            inp7.innerHTML = 'junior';
        }
        else{
            inp7.innerHTML = 'Trainee';
        }
        inp8.innerHTML = 'Delete';
        inp8.addEventListener('click',function()
        {
            row.innerHTML = null;
        })
        row.append(inp1,inp2,inp3,inp4,inp5,inp6,inp7,inp8);
        tbody.append(row)
        
    })
})


