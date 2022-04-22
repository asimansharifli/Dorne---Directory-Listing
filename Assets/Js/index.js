// Looking For navabar
document.getElementById('nav_places_tab').onclick =function searchForm2() {
	document.getElementById("nav_places_tab").classList.add("active");
	document.getElementById("nav_events_tab").classList.remove("active");
	document.getElementById("nav_places").classList.add("active");
	document.getElementById("nav_events").classList.remove("active");
	document.getElementById("nav_places").classList.add("show");
	document.getElementById("nav_events").classList.remove("show");

}
document.getElementById('nav_events_tab').onclick =function searchForm2() {
	document.getElementById("nav_events_tab").classList.add("active");
	document.getElementById("nav_places_tab").classList.remove("active");
	document.getElementById("nav_events").classList.add("active");
	document.getElementById("nav_places").classList.remove("active");
	document.getElementById("nav_events").classList.add("show");
	document.getElementById("nav_places").classList.remove("show");
}


// Dorne Featured Destination Card
	const destinationsCardWrapper=document.querySelector(".destinations-wrapper")
	const getDataDestination=async()=>{
		let newArr2=[]
		const response=await fetch("https://asiman-final-default-rtdb.firebaseio.com/destination.json")
		const data= await response.json()
		for(let key in data){
			newArr2.push(data[key])
		}

		return newArr2
	}
	getDataDestination().then(response=>{
		for(let item of response){
			var swiper = new Swiper('.swiperssss', {
				slidesPerView: 5,
				spaceBetween: 0,
				loop: true,
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
					1120: {
						slidesPerView:5 ,
						spaceBetween: 0,
					},
				}
			});
			
			destinationsCardWrapper.innerHTML+=`<div class="swiper-slide destination_card">
			<div class="single_features_area">
				<!-- Start Card Image-->
				<div class="features_area_image">
					<img src="${item.img}" alt="${item.country}" >
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
	}).catch(error=>console.log(error));



// Dorne Featured Restaurant Card
		const restuarantsCardWrapper=document.querySelector(".restuarant-wrapper")
	const getDataRestuarant=async()=>{
		let newArr3=[]
		const response=await fetch("https://asiman-final-default-rtdb.firebaseio.com/restuarant.json")
		const data= await response.json()
		for(let key in data){
			newArr3.push(data[key])
		}

	
		
		return newArr3
	}
	getDataRestuarant().then(response=>{
		for(let item of response){
			var swiper = new Swiper('.swiper', {
				slidesPerView: 5,
				spaceBetween: 0,
				loop: true,
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
					1120: {
						slidesPerView:5 ,
						spaceBetween: 0,
					},
				}
			});
			restuarantsCardWrapper.innerHTML+=`<div class="swiper-slide destination_restuarant_card">
			<div class="single_features_restaurant_area">
				<div class="features_restuarant_image">
					<img src="${item.img}" alt="${item.country}">
				</div>
				<div class="ratings_map_area">
					<a href="#" class="score">${item.score}</a>
					<a href="#" class="map"><img src="./Assets/Images/Featured Restuarant/Map/Map.png" ></a>
				</div>
				<div class="feature_restaurant_content">
					<div class="feature_restaurant_title">
						<h5>${item.foodname}</h5>
						<p>${item.country}</p>
					</div>
					<div class="feature_restuarant_favourite">
						<a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
					</div>
				</div>
				<!-- End Feature Content-->
			</div>
		</div>`
		}
	}).catch(error=>console.log(error));


// Dorne Featured Events Card
const eventsCardWrapper=document.querySelector(".features_events_area_card_wrapper")
const getData=async()=>{
	let newArr=[]
	const response=await fetch("https://asiman-final-default-rtdb.firebaseio.com/event.json")
	const data= await response.json()
	for(let key in data){
		newArr.unshift(data[key])
	}
	return newArr
}
getData().then(res=>{
	for(let item of res){
		eventsCardWrapper.innerHTML+=`<div class="features_events_area_card ">
		<div class="single_feature_events_area animated fadeInUpBig">
			<!-- Event Thumb-->
			<div class="feature_events_thumb">
				<div class="featured_events_image">
					<img src="${item.img}" alt="${item.title}">
				</div>
				<div class="date_map_area">
					<a href="#" class="date">${item.date}</a>
					<a href="#" class="map"><img src="./Assets/Images/Featured Events/Map/map.png" ></a>
				</div>
			</div>
			<!-- Event Content Area-->
			<div class="feature_events_content">
				<h5>${item.title}</h5>
				<h6>${item.author}</h6>
				<p>${item.content}</p>
			</div>
			<!-- Event details Button-->
			<div class="feature_events_details_btn">
				<a href="#">+</a>
			</div>
			</div>
	</div>`
	}
}).catch(error=>console.log(error))


