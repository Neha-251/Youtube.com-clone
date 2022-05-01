let user = document.getElementById("user-interface");

let mode_div = document.getElementById("mode_div");

let mode = document.getElementById("mode");

let video_div = document.getElementById("video_div");

let menu = document.getElementById("menu");

let sidebar = document.getElementById("sidebar");
let sidebar_extra = document.getElementById("sidebar_extra");

let flag_sidebar = false;

menu.addEventListener("click", () => {
    if (flag_sidebar === false) {

        sidebar.style.display = "none";
        sidebar_extra.style.display = "block";

        flag_sidebar = true;

    } else if (flag_sidebar === true) {

        sidebar.style.display = "block";
        sidebar_extra.style.display = "none";

        flag_sidebar = false;
    }
})


// user.addEventListener("click", ()=> {
//     mode_div.style.display = "block";

// })

// mode_div.addEventListener("mouseleave", ()=> {
//     mode_div.style.display = "none";

// })

// let mode_flag = true;

// let solid = document.querySelector(".fa-solid");
// let regular = document.querySelector(".fa-regular");
// let brand = document.querySelector(".fa-brands");

// mode.addEventListener("click", () => {
//     if(mode_flag === false){

//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         mode.innerHTML = "White Mode";
//         solid.style.color = "white";
//         regular.style.color = "white";
//         brand.style.color = "white";

//         mode_flag = true;

//     } else if(mode_flag === true){

//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         mode.innerHTML = "Dark Mode";
//         solid.style.color = "black";
//         regular.style.color = "black";
//         brand.style.color = "black";


//         mode_flag = false;

//     }

// })

const results_div = document.getElementById("search_results");


let search_button = document.getElementById("search_button");


search_button.addEventListener("click", () => {
    let search_input = document.getElementById('search_input').value;

    localStorage.setItem("video_query", search_input);
    console.log(search_input);
    window.location.href = "search result.html";
})





async function showVideo() {
    try {

        let api = "AIzaSyDMMtTBrVpA0EVYEka5Vj2g0hdL13iRZFQ";

        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=indian%trending%videos&type=video&key=${api}`);


        let data = await response.json();
        let videos = data.items;
        console.log(videos);
        appendVideos(videos);
    }
    catch (err) {
        console.log(err);
    }
}


showVideo();

const appendVideos = (items) => {

    items.forEach((element) => {
        let sub_video_div = document.createElement('div');
        sub_video_div.setAttribute("id", "sub_video_div");

        let sub_video_div_1 = document.createElement('div');
        sub_video_div_1.setAttribute("id", "sub_video_div_1");

        let sub_video_div_2 = document.createElement('div');
        sub_video_div_2.setAttribute("id", "sub_video_div_2");

        let { snippet: { thumbnails: { high: { url } } } } = element;
        let { snippet: { title } } = element;
        let { snippet: { channelTitle } } = element;

        let img_thumbnail = document.createElement('img');
        img_thumbnail.setAttribute("id", "img_thumbnail");
        img_thumbnail.src = url;

        let img_title = document.createElement('p');
        img_title.setAttribute("id", "img_title");
        img_title.innerText = title;

        let img_channel = document.createElement('p');
        img_channel.setAttribute("id", "img_channel");
        img_channel.innerText = channelTitle;

        sub_video_div_1.append(img_thumbnail);

        sub_video_div_2.append(img_title, img_channel);

        sub_video_div.append(sub_video_div_1, sub_video_div_2);
        video_div.append(sub_video_div);


        // https://www.youtube.com/watch?v=

    });

}

