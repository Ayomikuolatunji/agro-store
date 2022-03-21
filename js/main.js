const exportWrapper = document.querySelector(".export")
const mineral = document.querySelector(".min")
const local = document.querySelector(".local")

const fetchExportProds=async()=>{
   fetch("http://localhost:5000/api/v2/products/")
   .then(data=>{
      return data.json()
   })
   .then(data=>{
       const exportProd=data.data.products
       exportProd.forEach(element => {
           if(element.product_type==="EXPORT"){

            if(element){
              return  exportWrapper.innerHTML+=`<div class="col-lg-3 col-md-4 col-6 col-6 mt-4">
                <section class="panel">
                    <div class="pro-img-box">
                        <img src=${element.imgUrl} alt="" />
                    </div>
 
                    <div class="panel-body text-center">
                        <h4>
                            <a href="#" class="pro-title">
                               ${element.product_name}
                            </a>
                        </h4>
                        <p class="price"><a href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20kernel%20oil%20exportation">Contact supplier</a></p>
                    </div>
                </section>
            </div>`
            } 
             return exportWrapper.innerHTML=`<div>
                <h1>No product added yet</h1>
            </div>`
           }
       });

   })
   .catch(err=>{
       console.log(err)
   })
}

fetchExportProds()

const fetchMineralProds=async()=>{
    fetch("http://localhost:5000/api/v2/products/")
    .then(data=>{
       return data.json()
    })
    .then(data=>{
        const exportProd=data.data.products
        const fil=exportProd.filter(prod=>{
            if(prod.product_type==="MINERAL"){
               return prod
            }
        })
        fil.forEach(pro=>{
            mineral.innerHTML+=`
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
                        <a class="cart" href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20Charcoal%20supply">Contact supplier</a>
                    </div>
                </div>
                <div class="why-text">
                    <h4>${pro.product_name}</h4>
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

 const fetchLocalProds=async()=>{
    fetch("http://localhost:5000/api/v2/products/")
    .then(data=>{
       return data.json()
    })
    .then(data=>{
        const exportProd=data.data.products
        const fil=exportProd.filter(prod=>{
            if(prod.product_type==="LOCAL"){
               return prod
            }
        })
        fil.forEach(pro=>{
            local.innerHTML+=`
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
                        <a class="cart" href="https://api.whatsapp.com/send?phone=+2349122170827&text=I%20want%20to%20enquires%20about%20Charcoal%20supply">Contact supplier</a>
                    </div>
                </div>
                <div class="why-text">
                    <h4>${pro.product_name}</h4>
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