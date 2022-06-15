$(function () {

    let allproduct2 = $(".allproduct2");
    let allproduct = $(".allproduct");




    $(document).ready(function () {
        $("#firstlist").click(function () {
            $(allproduct).removeClass("d-none");
            $(allproduct2).addClass("d-none");
        });

        $("#secondlist").click(function () {
            $(allproduct).addClass("d-none");
            $(allproduct2).removeClass("d-none");
        });



    });


    $(document).ready(function () {
        $('#cart').hide();
        $(".fa-cart-arrow-down").mouseenter(function () {
            $('#cart').show();
        })
        $('#cart').mouseleave(function () {
            $('#cart').hide();
        })

        var cart_item_count = 0;
        $('.btn-primary').click(function () {
            cart_item_count++;
            var img_src = $(this).parent().parent().children(".img1").children("img").attr("src");
            var title = $(this).parent().children("#title").text();
            var price = $(this).parent().children("#price").text();



            // localStorage.setItem("order", JSON.stringify(cart_item));
            // cart_item = JSON.parse(localStorage.getItem("order"));


            var cart_item = `
           <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">
           <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0">
            <img src=${img_src} style="height:60px;"   alt="">
            </div>
            <div id="title" class="col-md-2 d-flex flex-wrap align-content-center">
            <h6 style="font-size:15px; padding-left:10px">${title}</h6>
            </div>
            <div id="price" class="col-md-3 d-flex flex-wrap align-content-center">
            <h6 class=" " style="padding-left:60px;"></span class="cart_item_price">${price}</span></h6>
            </div>
            <i class="fas fa-times close" style ="cursor:pointer; padding:18px; padding-left:50px;"></i>
          </div>
         
            `




            $("#order").append(cart_item);

            $("#cart_item_count").text(cart_item_count);
            $(".close").click(function () {
                $(this).parents(".main").remove();
                item_count();
            })
            item_count();
        })
        function item_count() {
            var res = $("#order").children().length;
            $("#cart_item_count").text(res);
        }
    })

























});





