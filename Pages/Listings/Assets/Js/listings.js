const listingsCardWrapper=document.querySelector(".listing_destination_card_wrapper")
const getData=async()=>{
 //box.innerHTML=`<img src="../../Assets/Images/Wait Gif/waiting-page.gif" >`
	let newArr=[]
	const response=await fetch("https://asiman-final-default-rtdb.firebaseio.com/destination.json")
	const data= await response.json()
    //box.innerHTML=""
	for(let key in data){
		newArr.push(data[key])
	}
	return newArr
}
getData().then(res=>{
	for(let item of res){
		listingsCardWrapper.innerHTML+=`<div class="destination_card">
        <div class="single_features_area animated fadeInUpBig">
            <!-- Start Card Image-->
            <div class="features_area_image">
                <img src="${item.img} " alt="${item.country}" >
            </div>
            <!-- End Card Image-->
            <!-- Start Price Start-->
            <div class="price_start">
                <p>FROM $ <span class="price">${item.price}</span> / <span class="time">${item.daytime}</span></p>
            </div>
            <!-- End Price Start-->
            <!-- Start Feature Content-->
            <div class="feature_content">
                <!-- Start Feature Title-->
                <div class="feature_title">
                    <h4 class="event_name">${item.country}</h4>
                    <p class="event_reason">${item.content}</p>
                </div>
                <!-- End Feature Title-->
                <!-- Start Feature Fovorite-->
                <div class="feature_favourite">
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                </div>
                <!-- End Feature Fovorite-->
            </div>
            <!-- End Feature Content-->
        </div>
    </div>`
	}
}).catch(error=>console.log(error))
