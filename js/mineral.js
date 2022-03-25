const api="https://roi-investment.herokuapp.com/api/v2/products/"

const mineral = document.querySelector(".mins")

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

