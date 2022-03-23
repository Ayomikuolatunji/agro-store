const realEstate=document.querySelector(".estate")
const api="https://roi-investment.herokuapp.com/api/v2/products/"

 //  local fetch api function call
 const fetchRealEstateProds=async()=>{
    let loader = `<div class="d-flex justify-content-center text-center mx-auto">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`;
    realEstate.innerHTML=loader
    fetch(api)
    .then(data=>{
       return data.json()
    })
    .then(data=>{
        realEstate.innerHTML=""
        const exportProd=data.data.products
        exportProd.forEach(pro=>{
            if(pro.product_type==="ESTATE"){
                console.log(pro)
                realEstate.innerHTML+=`
            <div class="col-md-6 col-lg-3 col-xl-3">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img class="img-fluid estate-height" src=${pro.imgUrl} alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>${pro.product_name}</h3>
                                <p>${pro.desc}</p>
                            </div>
                            <ul class="option-blog">
                            <p class="agent"><a href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20${pro.product_name}">Contact Agent</a>
                            </p>
                            </div>
                            </ul>
                        </div>
                    </div>
            </div>
            `
            }
        })
    })
    .catch(err=>{
        console.log(err)
    })
 }
 fetchRealEstateProds()