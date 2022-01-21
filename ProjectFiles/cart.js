
    var cartArray = JSON.parse(localStorage.getItem("cartItems"));

    // {
        //     img: "",
        //     name: "",
        //     disc: "",
        //     strikeoff: "$15.50",
        //     rate: "Now $3.87",
        //     p1: "",
                // smell: "WOODY",
                // type: "BODY SOAP",
        // },

        var count = [];
        var price = [];

    for(var i = 0; i < cartArray.length; i++) {
        count[i] = 1;
        price[i] = Number(cartArray[i].rate.substring(5));
    }

    console.log(price);

    console.log(count);    

    createProduct(cartArray);   
    
    function createProduct(cartArray) {
        document.querySelector("#container").innerHTML = "";

        cartArray.map(function (ele, ind) {

            var prodis = document.createElement("div");
            prodis.setAttribute("id", "productdisplay");

            var pro = document.createElement("img");
            pro.setAttribute("src", ele.img);

            var protxt = document.createElement("div");
            protxt.setAttribute("class", "protext");

            var h4t = document.createElement("h4");
            h4t.textContent = ele.name;

            var p1t = document.createElement("p");
            p1t.textContent = ele.disc;

            var p2t = document.createElement("p");
            p2t.setAttribute("id", "redtext");
            p2t.textContent = ele.p1;

            var sp = document.createElement("span");
            sp.setAttribute("id", "heart");
            sp.setAttribute("class", "fas fa-heart");

            sp.addEventListener("click", function() {
                sp.setAttribute("class", "fas fa-heart checked");
            });

            var sp2 = document.createElement("span");
            sp2.textContent = " Add to Favorite";

            protxt.append(h4t, p1t, p2t, sp, sp2);

            var div2 = document.createElement("div");
            div2.setAttribute("id", "ratediv");

            var h31 = document.createElement("h3");
            h31.setAttribute("id", "rate");
            h31.textContent = ele.rate.substring(4);

            div2.append(h31);

            var div3 = document.createElement("div");
            div3.setAttribute("id", "cal");

            var div31 = document.createElement("div");
            div31.setAttribute("id", "hov");
            div31.setAttribute("class", "box");

            var p3t = document.createElement("p");
            p3t.textContent = "+";
            p3t.addEventListener("click", function() {
                    count[ind] += 1;
                    createProduct(cartArray);
                    update();
            });

            div31.append(p3t);

            var div41 = document.createElement("div");
            div41.setAttribute("class", "box");

            var p4t = document.createElement("p");
            p4t.textContent = count[ind];

            div41.append(p4t);

            var div51 = document.createElement("div");
            div51.setAttribute("id", "hov");
            div51.setAttribute("class", "box");

            var p5t = document.createElement("p");
            p5t.textContent = "-";
            p5t.addEventListener("click", function() {
                    if (count[ind] > 1) {
                        count[ind]--;
                        createProduct(cartArray);
                        update();
                    }
            });

            div51.append(p5t);

            div3.append(div31, div41, div51);

            var div6 = document.createElement("div");
            div6.setAttribute("id", "total");

            var ttxt = document.createElement("h4");
            ttxt.setAttribute("id", "tottext");
            ttxt.textContent = "$"+(price[ind] * count[ind]).toFixed(2);

            div6.append(ttxt);

            var div7 = document.createElement("div");
            
            var sp3 = document.createElement("span");
            sp3.setAttribute("id", "del");
            sp3.setAttribute("class", "fas fa-times");
            sp3.addEventListener("click", function() {
                cartArray.splice(ind, 1);
                createProduct(cartArray);
                update();
            });

            div7.append(sp3);

            prodis.append(pro, protxt, div2, div3, div6, div7);

            document.querySelector("#container").append(prodis);
        });
    }
    update();

    function update() {
        var sum = 0;
        for (var i = 0; i < price.length; i++)
            sum += (price[i] * count[i]);

        var txt1 = document.querySelector("#tot1")
        txt1.textContent = "$"+sum.toFixed(2);

        var txt2 = document.querySelector("#tot2")
        txt2.textContent = "$5.99";

        var tax = 0.05 * sum.toFixed(2);

        var txt3 = document.querySelector("#tot3")
        txt3.textContent = "$"+tax.toFixed(2);

        var total1 = Number(sum.toFixed(2)) + Number(tax.toFixed(2)) + Number(5.99);

        var txt4 = document.querySelector("#bigtxt1")
        txt4.textContent = "$"+total1.toFixed(2);
    }

    document.querySelector("#secretcode").addEventListener("click", function() {
        var code = document.querySelector("#codebox").value;

        if (code == "masaifw15") {
            var sum = 0;
            for (var i = 0; i < price.length; i++)
                sum += (price[i] * count[i]);

            var reduce = 0.05 * sum;
            sum = sum - reduce;

            var txt1 = document.querySelector("#tot1")
            txt1.textContent = "$"+sum.toFixed(2);

            var txt2 = document.querySelector("#tot2")
            txt2.textContent = "$5.99";

            var tax = 0.05 * sum.toFixed(2);

            var txt3 = document.querySelector("#tot3")
            txt3.textContent = "$"+tax.toFixed(2);

            var total1 = Number(sum.toFixed(2)) + Number(tax.toFixed(2)) + Number(5.99);

            var txt4 = document.querySelector("#bigtxt1")
            txt4.textContent = "$"+total1.toFixed(2);
        }
    });
