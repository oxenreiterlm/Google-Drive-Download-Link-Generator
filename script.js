const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", createLink);

function createLink(event) {
  event.preventDefault();
  const confirmLink = gLink.value.includes("https://drive.google.com/file/d");
  if (confirmLink == true) {
    const getDownloadLink = gLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;

    function copyText(target) {
      if (target.value == " ") {
        alert("Please enter a link");
      } else {
        target.select();
        document.execCommand("copy");
      }
    }
    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });
    const audio1 = `<audio width="300" height="32" controls="controls" src="`;
    const audio2 = `" type="audio/mp3"></audio>`;
    const embedAudio = document.querySelector("#embed-audio");
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    const getVideoLink = gLink.value.replace("/view?usp=sharing", "");
    const video1 = `"<iframe src="`;
    const video2 = `/preview width="560" height="315"></iframe>`;
    const embedVideo = document.querySelector("#embed-video");
    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please enter a Google Drive link");
  }
}
