const exportWrapper = document.querySelector(".export")
const mineral = document.querySelector(".mins")
const local = document.querySelector(".local")
const realEstate=document.querySelector(".estate")
const api="https://roi-investment.herokuapp.com/api/v2/products/"



const Err=()=>{
      return exportWrapper.innerHTML=`<div>
      <h1>Error loading products due network connection</h1>
  </div>`
}

// fetch export api function call
function fetchExportProds(){
    let loader = `<div class="d-flex justify-content-center text-center mx-auto">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`;
    exportWrapper.innerHTML = loader;
   fetch(api)
   .then(data=>{
      return data.json()
   })
   .then(data=>{
    if(data.status==="success"){
        exportWrapper.innerHTML = "";
        const exportProd=data.data.products
        exportProd.forEach(element => {
       if(element.product_type==="EXPORT"){
        if(element){
          return  exportWrapper.innerHTML+=`<div class="col-lg-3 col-md-4 col-6 col-6 mt-4">
            <section class="panel">
                <div class="pro-img-box">
                    <img src=${element.imgUrl} alt=api />
                </div>

                <div class="panel-body text-center">
                    <h4>
                        <a href="#" class="pro-title">
                           ${element.product_name}
                        </a>
                    </h4>
                    <p class="price"><a href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20${element.product_name}">Contact supplier</a></p>
                </div>
            </section>
        </div>`
        } 
         return exportWrapper.innerHTML=`<div>
            <h1>No product added yet</h1>
        </div>`
       }
    });
       }
   })
   .catch(err=>{
       console.log(err)
        return Err()
   })
}

fetchExportProds()
// fetch mineral rescources api function call 
const fetchMineralProds=async()=>{
    let loader = `<div class="d-flex justify-content-center text-center mx-auto">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`;
    mineral.innerHTML=loader
    fetch(api)
    .then(data=>{
       return data.json()
    })
    .then(data=>{
        mineral.innerHTML=""
        const exportProd=data.data.products
        const fil=exportProd.filter(prod=>{
            if(prod.product_type==="MINERAL"){
               return prod
            }
        })
        fil.forEach(pro=>{
            mineral.innerHTML+=`
            <div class="col-lg-3 col-md-6 special-grid mineral-rescources col-6">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                        <p class="sale">Available</p>
                    </div>
                    <img src=${pro.imgUrl} alt="Image">
                    <div class="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20${pro.product_name}">Contact supplier</a>
                    </div>
                </div>
                <div class="why-text">
                    <h4>${pro.product_name}</h4>
                </div>
            </div>        
     </div>
            `
        })
    })
    .catch(err=>{
        console.log(err)
    })
 }
 
 fetchMineralProds()


//  local fetch api function call
 const fetchLocalProds=async()=>{
    let loader = `<div class="d-flex justify-content-center text-center mx-auto">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`;
    local.innerHTML=loader
    fetch(api)
    .then(data=>{
       return data.json()
    })
    .then(data=>{
        local.innerHTML=""
        const exportProd=data.data.products
        const fil=exportProd.filter(prod=>{
            if(prod.product_type==="LOCAL"){
               return prod
            }
        })
        fil.forEach(pro=>{
            local.innerHTML+=`
            <div class="col-lg-3 col-md-6 special-grid mineral-rescources col-6">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                        <p class="sale">Available</p>
                    </div>
                    <img src=${pro.imgUrl} alt="Image">
                    <div class="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20${pro.product_name}">Contact supplier</a>
                    </div>
                </div>
                <div class="why-text">
                    <h4>${pro.product_name}</h4>
                </div>
            </div>  
            </div>
            `
        })
    })
    .catch(err=>{
        console.log(err)
    })
 }
 fetchLocalProds()

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