import axios from "axios";

const getData = () => {
  axios
    .get(
      "https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=true",
      {
        headers: {
          authorization: "Client-ID c8b0425fb46399b"
        }
      }
    )
    .then((data) => {
      fillData(data.data);
    })
    .catch((error) => console.log(error));
};

function fillData(data) {
  let newData = data.data;

  newData.map((e) => {
    //  console.log(e)
    let container = document.getElementById("imagesData");

    let titleEl = document.createElement("h3");
    titleEl.setAttribute("id", "title");
    let commentEl = document.createElement("p");
    let img = document.createElement("img");
    let viewEl = document.createElement("p");
    let div = document.createElement("div");
    let like = document.createElement("p");
    div.setAttribute("class", "innerDiv");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");
    let viewDiv = document.createElement("div");
    viewDiv.setAttribute("class", "view");
    let viewIcon = document.createElement("img");
    viewIcon.style.height = "1.1rem";
    viewIcon.style.width = "1.1rem";
    let commentIcon = document.createElement("img");
    commentIcon.style.height = "1.1rem";
    commentIcon.style.width = "1.1rem";
    commentIcon.fill = "red";
    let likeIcon = document.createElement("p");

    const { title, views, images, comment_count, ups } = e;

    // h3.innerText = title;

    if (images) {
      if (images[0].link !== undefined && images[0].type !== "video/mp4") {
        //  console.log(images[0].link)

        img.src = images[0].link;

        titleEl.innerText = title;
        commentEl.innerText = comment_count;
        viewEl.innerText = views;
        imgDiv.append(img);
        like.innerText = ups;
        viewIcon.src = "./src/images/Antu_view-preview.svg";

        commentIcon.src = "./src/images/vector7.svg";
        likeIcon.textContent = "⬆";
        viewDiv.append(
          commentIcon,
          commentEl,
          viewIcon,
          viewEl,
          likeIcon,
          like,
        );

        div.append(imgDiv, titleEl, viewDiv);
        container.append(div);
      }
    }
  });
}

getData();
