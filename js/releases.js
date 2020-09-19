function makeReleaseHtml(version, notes) {
  let notesLog = "";

  for (const note of notes) {
    notesLog += `<li>${note}</li>`;
  }

  if (notes.length == 0) { notesLog += "<li>No notes found for this release. </li>" }

  return `<h2>Updates for ${version}</h2><p><ul>${notesLog}</ul></p>`;
}

function getDeveloperReleaseNotes() {
  return fetch("./developer.json").then((resp) => resp.json());
}

function getStableReleaseNotes() {
  return fetch("./release.json").then((resp) => resp.json());
}

function updateReleases() {
  getStableReleaseNotes()
    .then(resp => {
      let releases = document.getElementById("releases-stable");
      let newHTML = "";
      for (const release in resp) {
        const releaseID = release.replaceAll(".", "_")
        newHTML += `<div id="release_${releaseID}">${makeReleaseHtml(release, resp[release])}</div>`;
      }
      releases.innerHTML = newHTML ?? "";
    })
    .catch(err => {
      console.error(err);
      releases.innerHTML = `<p style="text-align: center">Failed to get stable release information.</p>`;
    })
  getDeveloperReleaseNotes()
    .then(resp => {
      let releases = document.getElementById("releases-developer");
      let newHTML = "";
      for (const release in resp) {
        const releaseID = release.replaceAll(".", "_")
        newHTML += `<div id="release_${releaseID}">${makeReleaseHtml(release, resp[release])}</div>`;
      }
      releases.innerHTML = newHTML ?? "";
    })
    .catch(err => {
      console.error(err);
      releases.innerHTML = `<p style="text-align: center">Failed to get developer release information.</p>`;
    })
}

function showStableReleaseNotes() {
  let stable = document.getElementById("releases-stable");
  let developer = document.getElementById("releases-developer");

  let btnBeta = document.getElementById("btn-beta");
  let btnStable = document.getElementById("btn-stable");

  stable.classList.remove("releases-hide");
  developer.classList.add("releases-hide");

  btnBeta.classList.remove("active");
  btnStable.classList.add("active");
}

function showDeveloperReleaseNotes() {
  let stable = document.getElementById("releases-stable");
  let developer = document.getElementById("releases-developer");

  let btnBeta = document.getElementById("btn-beta");
  let btnStable = document.getElementById("btn-stable");

  stable.classList.add("releases-hide");
  developer.classList.remove("releases-hide");

  btnStable.classList.remove("active");
  btnBeta.classList.add("active");
}