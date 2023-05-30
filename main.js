var expenseForm=document.getElementById("expense-form")
var expenseAmount=document.getElementById("expenseamount");
var expenseDesc=document.getElementById("expensedescription");
var expenseCategory=document.getElementById("category");
var expenseList=document.getElementById("expense-list");
// console.log(expenseAmount);
// console.log(expenseDesc);
// console.log(expenseCategory);


localStorage.clear();

expenseList.addEventListener('click',removeItem);
// var editBtn=document.getElementById("edit-btn");
// editBtn.addEventListener('click',editItem);


expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));

    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm edit';
    editBtn.id="edit-btn";
    editBtn.appendChild(document.createTextNode('EDIT'));

    var expenseDetails=[expenseAmount.value,expenseDesc.value,expenseCategory.value];
    localStorage.setItem(expenseDesc.value,expenseDetails);
    var li= document.createElement('li');
    li.className='expense-items';
    li.id=expenseDesc.value;
    li.appendChild(document.createTextNode(expenseDetails));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    expenseList.appendChild(li);

    expenseDetails = "";

    
  });

  function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li= e.target.parentElement;
        expenseList.removeChild(li);
        localStorage.removeItem(e.target.parentElement.id);
        // console.log(e.target.parentElement.id);



    }

    else if(e.target.classList.contains('edit')){
      console.log(Array.from(localStorage.getItem(e.target.parentElement.id)));
    }
  }

  