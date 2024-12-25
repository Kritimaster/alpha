let form = document.getElementById('reg_form')

form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    let first_name = event.target.fname.value;
    let last_name = event.target.lname.value;
    let email = event.target.email.value;
    let pass = event.target.password.value;
    let conf_pass = event.target.conf_pass.value;



    if(first_name=='')
        {
            alert('please fill the first name');
            return false
        }



        if(last_name=='')
            {
        alert('please fill the last name');
                return false
            }


            if(email=='')
                {
                    alert('please fill the email');
                    return false
                }

                if(pass =='')
                    {
                        alert('please fill the pass');
                        return false
                    }


                    if(pass.length<6)
                        {
                            alert('please make sure password having atleast 6 char')
                            return false
                        }
                        if(pass.length > 10)
                            {
                                alert('please make sure password having atmost 10 char')
                                return false
                            }

                        if(pass!== conf_pass)
                            {
                                alert('password not matching');
                                return false
                            }


                            let user ={
                                name:first_name+last_name,
                                email:email,
                                password:pass,
                            }


                            alert('Form submitted successfully');
                            form.reset();
                            return true;




})