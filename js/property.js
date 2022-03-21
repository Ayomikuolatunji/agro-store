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
                realEstate.innerHTML+=`
            <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img class="img-fluid" src=${pro.imgUrl} alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Warehouse for sale/let</h3>
                                <p><span>State:</span> <span>Lagos state </span></p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><i class="far fa-heart"></i></a></li>
                                <li><a href="#"><i class="fas fa-eye"></i></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20renting%2Fbuying%20a%20warehouse"><i class="far fa-comments"></i></a></li>
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