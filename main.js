function addnewExpense(event) {
    event.preventDefault();
    const Expenseamount=event.target.Expenseamount.value;
    const description= event.target.description.value;
    const category= event.target.category.value;
  
    const obj={
     Expenseamount,
      description,
      category
    }
    axios.post("https://crudcrud.com/api/9fe7f31a74e1465cb1a3abeff9646380/expensedata",obj)
    .then((response) => {
        showNewUserOnScreen(response.data)
        console.log(response.data)

    }).then((err) => console.log(err))
//    localStorage.setItem(obj.Expenseamount,JSON.stringify(obj))
        // showNewUserOnScreen(obj)
 
    }
  
  
    window.addEventListener("DOMContentLoaded",() => {
        axios.get("https://crudcrud.com/api/9fe7f31a74e1465cb1a3abeff9646380/expensedata")
        .then((response) => {
            for(var i=0;i < response.data.length;i++){
                showNewUserOnScreen(response.data[i])
            }
            console.log(response)
        }).catch((err) => console.log(err))
    })


  
    function showNewUserOnScreen(user){
     document.getElementById('Expenseamount').value="";
     document.getElementById('description').value ="";
     document.getElementById('category').value="";

    if(user.category == 'electronics'){
        const parentNode = document.getElementById('ele');
  
        const childHTML  = `<li id=${user._id}>${user.Expenseamount} - ${user.description} - ${user.category}
                                        <button onclick=deleteuser('${user._id}')> Delete </button>
                                     </li>`
     
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }if(user.category == 'food'){
        const parentNode = document.getElementById('foo');
  
        const childHTML  = `<li id=${user._id}>${user.Expenseamount} - ${user.description} - ${user.category}
                                        <button onclick=deleteuser('${user._id}')> Delete </button>
                                     </li>`
     
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }if(user.category == "skincare"){
        const parentNode = document.getElementById('skin');
  
        const childHTML  = `<li id=${user._id}>${user.Expenseamount} - ${user.description} - ${user.category}
                                        <button onclick=deleteuser('${user._id}','${user.category}')> Delete </button>
                                     </li>`
     
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }
      
  }
  
  function deleteuser(userId,category){
    axios.delete(`https://crudcrud.com/api/9fe7f31a74e1465cb1a3abeff9646380/expensedata/${userId}`)
    .then((response) => {
        console.log(response)
        removeExpenseTrackerFromScreen(userId,category)
    }).catch((err) => console.log(err))

  }
  
  function removeExpenseTrackerFromScreen(userId,category){
    if(category == "skincare"){
        const parentNode=document.getElementById('skin');
        const childNodeToBeDeleted = document.getElementById(userId);
        if (childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
        }
    }
    if(category != "1"){
        const parentNode=document.getElementById('ele');
        const childNodeToBeDeleted = document.getElementById(userId);
        if (childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
        }
    }


  }
        

