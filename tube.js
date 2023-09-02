const totalView = async(searchAll) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000?search=${searchAll}`);
const data = await res.json();
const phones = data.data;
displayView(phones);
}







const displayView = (phones) =>{
    const containerCard = document.getElementById('container-card');
    containerCard.textContent ='';
    
    
    
    
    phones.forEach(phone => {
    console.log(phone);
    const cardCardCard = document.createElement('div');
    cardCardCard.classList=`card w-96 bg-base-100 shadow-xl mt-20`;
    cardCardCard.innerHTML=`
    <figure><img src="${phone.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
    <div class="flex justify-start items-center gap-4">
    <div class="w-10 h-10 ">
      <img src ="${phone.authors[0].profile_picture}" alt="profile" class="w-full h-full rounded-full">
     
      </div>
      <div class="flex flex-col justify-start items-center w-auto gap-3">
      <p class="text-xl font-semibold">${phone.title}</p>
      <div class="flex justify-start items-center gap-4>
      <p class="text-gray-400">${phone.authors[0].profile_name}</p>
      <div class="ml-4">
      <img src="sticky.png" alt="logo">
      </div>

      </div>
      </div>
      </div>

      </div>
    
    `;
    containerCard.appendChild(cardCardCard);
    
    });
    
    
    }


    totalView();
