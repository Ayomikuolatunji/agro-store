const exportWrapper = document.querySelector(".export")

const fetchProduct=async()=>{
   fetch("https://roi-investment.herokuapp.com/api/v2/products/")
   .then(data=>{
      return data.json()
   })
   .then(data=>{
       console.log(data.data.products)
       const exportProd=data.data.products
       exportProd.forEach(element => {
           if(element.product_type==="EXPORT"){
            console.log(element)
            if(element){
              return  exportWrapper.innerHTML+=`<div class="col-lg-3 col-md-4 col-6 col-6">
                <section class="panel">
                    <div class="pro-img-box">
                        <img src=${element.imgUrl} alt="" />
                    </div>
 
                    <div class="panel-body text-center">
                        <h4>
                            <a href="#" class="pro-title">
                               Kernel oil
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

fetchProduct()