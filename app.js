function product() {

    fetch('http://202.164.213.67/crm/products.php')
        .then(Response => Response.json())
        .then(data => productDetails(data))
}

product();

function productDetails(data) {

    // console.log(data);

    const productAll = document.getElementById('main');

    for (const product of data) {

        const div = document.createElement("div")
        div.className = "col-md-3 m-3 shadow p-2 mb-5 bg-body rounded"

        div.innerHTML = `
            <img class="text-center" style="align:center;" width="270px" height="200px" src="${"http://202.164.213.67/android/" + product.ICONS}" />
            <h6>Type: ${product.PTYPE}</h6>
            <h6>Sum Assured: ${product.SUM_ASSURED}</h6>
            <h6>Premium: ${product.PREMIUM}</h6>
            <h6>Term: ${product.TERM}</h6>
            <h6>Age Comm:${product.AGE_AT_COMM}</h6>
            <h6>
        `
        productAll.appendChild(div)

    }





    // for (const product of data) {


    // }

}