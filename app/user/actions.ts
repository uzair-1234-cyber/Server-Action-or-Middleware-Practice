'use server';

 export  const createUser = async (formData:FormData) => {
  const Name = formData.get('name')
  const email = formData.get('email')

  console.log(Name);
  console.log(email);
  
  

};